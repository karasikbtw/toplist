// Utility functions
async function fetchJSON(url) {
  try {
    console.log(`Fetching JSON from: ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Successfully fetched data from ${url}`, data);
    return data;
  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error);
    return null;
  }
}

function renderTemplate(template, data) {
  console.log(`Rendering template with data:`, data);
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => data[key] || '');
}

// Initialize the application based on current page
document.addEventListener('DOMContentLoaded', async () => {
  const path = window.location.pathname;
  console.log(`Current path: ${path}`);

  if (path === '/' || path === '/index.html') {
    await loadServers();
  } else if (path.startsWith('/server/')) {
    const serverId = path.split('/')[2];
    console.log(`Loading details for server ID: ${serverId}`);
    await loadServerDetails(serverId);
  } else if (path.startsWith('/list/')) {
    const listId = path.split('/')[2];
    console.log(`Loading details for list ID: ${listId}`);
    await loadListDetails(listId);
  } else if (path.startsWith('/level/')) {
    const levelId = path.split('/')[2];
    console.log(`Loading details for level ID: ${levelId}`);
    await loadLevelDetails(levelId);
  } else {
    console.warn('Unknown page:', path);
  }
});

// Load all servers on homepage
async function loadServers() {
  const serversContainer = document.getElementById('servers-container');
  if (!serversContainer) {
    console.warn('Servers container not found!');
    return;
  }

  const servers = await fetchJSON('servers.json');
  if (!servers) {
    console.warn('No servers data received.');
    return;
  }

  console.log(`Loaded ${servers.length} servers`);
  servers.forEach(server => {
    const serverCard = document.createElement('div');
    serverCard.className = 'card';
    serverCard.innerHTML = `
      <h2>${server.name}</h2>
      <div class="server-info">
        <span class="server-ip">IP: ${server.ip}:${server.port}</span>
      </div>
      <a href="/server/${server.id}" class="button button-primary" style="margin-top: 1rem;">View Lists</a>
    `;
    serversContainer.appendChild(serverCard);
  });
}

// Load server details page
async function loadServerDetails(serverId) {
  const [server, lists] = await Promise.all([
    fetchJSON('servers.json').then(servers => servers.find(s => s.id === serverId)),
    fetchJSON('lists.json').then(lists => lists.filter(l => l.server_id === serverId))
  ]);

  if (!server) {
    alert('Server not found');
    console.warn(`Server with ID ${serverId} not found`);
    window.location.href = '/';
    return;
  }

  console.log(`Loaded details for server:`, server);
  document.getElementById('server-name').textContent = server.name;
  document.getElementById('server-ip').textContent = `IP: ${server.ip}:${server.port}`;

  const listsContainer = document.getElementById('lists-container');
  console.log(`Loading lists for server ID: ${serverId}`);
  lists.forEach(list => {
    const listCard = document.createElement('div');
    listCard.className = 'card';
    listCard.innerHTML = `
      <h2>${list.name}</h2>
      <p>Contains ${list.levels.length} levels</p>
      <a href="/list/${list.id}" class="button button-primary" style="margin-top: 0.5rem;">View Levels</a>
    `;
    listsContainer.appendChild(listCard);
  });
}

// Load list details page
async function loadListDetails(listId) {
  const [list, server, levels] = await Promise.all([
    fetchJSON('lists.json').then(lists => lists.find(l => l.id === listId)),
    fetchJSON('servers.json').then(servers => servers.find(s => s.id === list.server_id)),
    fetchJSON('levels.json')
  ]);

  if (!list) {
    alert('List not found');
    console.warn(`List with ID ${listId} not found`);
    window.location.href = '/';
    return;
  }

  console.log(`Loaded details for list:`, list);
  document.getElementById('list-name').textContent = list.name;
  document.getElementById('server-name').textContent = `Server: ${server.name}`;

  const levelsContainer = document.getElementById('levels-container');
  console.log(`Loading levels for list ID: ${listId}`);
  list.levels.forEach(levelId => {
    const level = levels.find(l => l.id === levelId);
    if (level) {
      const levelItem = document.createElement('div');
      levelItem.className = `level-item ${level.top_in_list ? 'top' : ''}`;
      levelItem.innerHTML = `
        <div class="level-meta">
          <span>${level.name}</span>
          <span class="username">by ${level.creator}</span>
          ${level.top_in_list ? '<span class="badge top">TOP</span>' : ''}
        </div>
        <a href="/level/${level.id}" class="button button-secondary">Details</a>
      `;
      levelsContainer.appendChild(levelItem);
    }
  });
}

// Load level details page
async function loadLevelDetails(levelId) {
  const [level, lists, servers] = await Promise.all([
    fetchJSON('levels.json').then(levels => levels.find(l => l.id === levelId)),
    fetchJSON('lists.json'),
    fetchJSON('servers.json')
  ]);

  if (!level) {
    alert('Level not found');
    console.warn(`Level with ID ${levelId} not found`);
    window.location.href = '/';
    return;
  }

  console.log(`Loaded details for level:`, level);
  const levelList = lists.find(l => l.levels.includes(levelId));
  const server = levelList ? servers.find(s => s.id === levelList.server_id) : null;

  document.getElementById('level-name').textContent = level.name;
  document.getElementById('creator').textContent = level.creator;
  document.getElementById('level-id').textContent = level.level_id;
  document.getElementById('top-badge').textContent = level.top_in_list ? 'Top in List!' : '';
  document.getElementById('top-badge').className = `badge ${level.top_in_list ? 'top' : ''}`;
  
  if (server) {
    document.getElementById('server-info').textContent = `Connected to: ${server.name}`;
    document.getElementById('server-ip').textContent = `IP: ${server.ip}:${server.port}`;
  }
}

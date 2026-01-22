const ROW_HEIGHT = 40;   // Pixels per row (Must match CSS)
const CONTAINER_HEIGHT = 500; // Height of the scroll window

function generateData(count) {
    const roles = ['Admin', 'Editor', 'Viewer', 'Moderator', 'User'];
    const statuses = ['Active', 'Pending', 'Banned'];
    
    return Array.from({ length: count }, (_, index) => {
        const randomRole = roles[Math.floor(Math.random() * roles.length)];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        return {
            id: index + 1,
            name: `User ${index + 1}`,
            email: `user${index + 1}@example.com`,
            role: randomRole,
            status: randomStatus
        };
    });
}

let allData = generateData(100000);
let filteredData = allData; // Currently visible data (initially all)


const scrollContainer = document.getElementById('scroll-container');
const spacer = document.getElementById('total-height-spacer');
const visibleContent = document.getElementById('visible-content');
const searchInput = document.getElementById('search-input');
const rowCountLabel = document.getElementById('row-count');

function renderVirtualList() {
    const scrollTop = scrollContainer.scrollTop;

    const startNode = Math.floor(scrollTop / ROW_HEIGHT);
    
    const visibleNodeCount = Math.ceil(CONTAINER_HEIGHT / ROW_HEIGHT) + 5;
    
    const endNode = Math.min(startNode + visibleNodeCount, filteredData.length);

    spacer.style.height = `${filteredData.length * ROW_HEIGHT}px`;

    const visibleData = filteredData.slice(startNode, endNode);

    visibleContent.innerHTML = visibleData.map(item => `
        <div class="row">
            <span class="id-col">#${item.id}</span>
            <span>${item.name}</span>
            <span>${item.email}</span>
            <span class="role-col" style="color: ${item.role === 'Admin' ? '#ef4444' : '#3b82f6'}">
                ${item.role}
            </span>
            <span style="flex: 0 0 80px;">${item.status}</span>
        </div>
    `).join('');

    const offsetY = startNode * ROW_HEIGHT;
    visibleContent.style.transform = `translateY(${offsetY}px)`;
    
    rowCountLabel.innerText = `Showing ${filteredData.length.toLocaleString()} rows`;
}


searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    
    filteredData = allData.filter(user => 
        user.name.toLowerCase().includes(term) || 
        user.role.toLowerCase().includes(term)
    );

    scrollContainer.scrollTop = 0;
    renderVirtualList();
});

scrollContainer.addEventListener('scroll', renderVirtualList);
renderVirtualList(); // Render first frame
const mediumUsername = 'ikuyakarl347';
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`;

fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('medium-articles');
    
    const htmlContent = data.items.map(item => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(item.pubDate).toLocaleDateString('en-US', options);

      const snippet = item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...';

      return `
        <div class="blog-post-row">
          <div class="post-content">
            <h2 class="post-year">${new Date(item.pubDate).getFullYear()}</h2>
            <hr class="post-divider">
            <h3 class="post-title"><a href="${item.link}">${item.title}</a></h3>
            
            <div class="post-meta">
              <span><i class="far fa-clock"></i> 5 minute read</span>
              <p><strong><i class="fas fa-calendar-alt"></i> Published:</strong> ${date}</p>
            </div>

            <div class="post-body">
              ${item.thumbnail ? `<img src="${item.thumbnail}" class="post-image" />` : ''}
              <p class="post-excerpt">${snippet}</p>
            </div>
          </div>
        </div>`;
    }).join('');

    container.innerHTML = htmlContent;
  })
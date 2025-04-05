// MVP TEMPORARY CLIENT-SIDE SEARCH ONLY. In production, replace with secure backend query.

document.getElementById("searchButton").addEventListener("click", function () {
	const query = document.getElementById("searchInput").value.trim().toLowerCase();
	if (!query) {
		showModal("Error", "Please enter a keyword to search.");
		return;
	}

	const results = {
		companies: [],
		products: [],
		videos: []
	};

	companies.forEach(company => {
		const companyMatch = fuzzyMatch(company.name, query) || fuzzyMatch(company.about?.description, query);
		if (companyMatch) results.companies.push(company);

		company.products?.forEach(product => {
			if (fuzzyMatch(product.name, query)) {
				results.products.push({ ...product, company });
			}
		});

		company.video_posts?.forEach(video => {
			if (fuzzyMatch(video.title, query) || fuzzyMatch(video.description, query)) {
				results.videos.push({ ...video, company });
			}
		});
	});

	displayFuzzyResults(query, results);
});

function fuzzyMatch(text, query) {
	if (!text) return false;
	return text.toLowerCase().includes(query);
}

function highlight(text, query) {
	const regex = new RegExp(`(${query})`, 'gi');
	return text.replace(regex, "<mark>$1</mark>");
}

function truncate(text, length = 60) {
	return text.length > length ? text.substring(0, length) + "..." : text;
}

function displayFuzzyResults(query, results) {
	const resultsDiv = document.getElementById("resultsContainer");
	const totalMatches = `
		<p><strong>${results.companies.length}</strong> companies found with "${query}".</p>
		<p><strong>${results.products.length}</strong> products found with "${query}".</p>
		<p><strong>${results.videos.length}</strong> videos found with "${query}".</p>
	`;

	let html = totalMatches + `<div class="search-results">`;

	if (results.companies.length) {
		html += `<h4>Companies</h4><ul>`;
		results.companies.forEach(c => {
			html += `
				<li class="search-item" onclick="goToDetails('company', '${c.id}')">
					<img src="${c.logo}" class="search-thumb" alt="logo">
					<div class="search-text">
						${highlight(truncate(c.name), query)}
						<p>${highlight(truncate(c.about?.description || ''), query)}</p>
					</div>
				</li>`;
		});
		html += `</ul>`;
	}

	if (results.products.length) {
		html += `<h4>Products</h4><ul>`;
		results.products.forEach(p => {
			html += `
				<li class="search-item" onclick="goToDetails('product', '${p.id}')">
					<img src="${p.product_img}" class="search-thumb" alt="product">
					<div class="search-text">
						${highlight(truncate(p.name), query)}
						<p>From ${p.company.name}</p>
					</div>
				</li>`;
		});
		html += `</ul>`;
	}

	if (results.videos.length) {
		html += `<h4>Videos</h4><ul>`;
		results.videos.forEach(v => {
			html += `
				<li class="search-item" onclick="goToDetails('video', '${v.id}')">
					<img src="${v.thumbnail}" class="search-thumb" alt="video">
					<div class="search-text">
						${highlight(truncate(v.title), query)}
						<p>${highlight(truncate(v.description), query)}</p>
					</div>
				</li>`;
		});
		html += `</ul>`;
	}

	html += `</div>`;

	document.getElementById("queryText").textContent = query;
	resultsDiv.innerHTML = html;
	document.getElementById("searchModal").style.display = "flex";
}

function goToDetails(type, id) {
	window.location.href = `details.html?type=${type}&id=${id}`;
}

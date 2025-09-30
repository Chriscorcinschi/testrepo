//modern method
const url = "./health.json";

async function loadArticles() {
	try {
		const response = await fetch(url);
		const data = await response.json();
		const { articles } = data;

		const articlesDiv = document.getElementById("articles");

		articles.forEach((article) => {
			const articleDiv = document.createElement("div");
			articleDiv.classList.add("article");

			articleDiv.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <h3>Ways to Achieve:</h3>
                <ul>
                    ${article.key_points.map((way) => `<li>${way}</li>`).join("")}
                </ul>
                <h3>Benefits:</h3>
                <ul>
                    ${article.impacts.map((benefit) => `<li>${benefit}</li>`).join("")}
                </ul>
                `;

			articlesDiv.appendChild(articleDiv);
		});
	} catch (error) {
		console.error("Error loading articles:", error);
	}
}
loadArticles();

const products = [
	{
		id: 1,
		image: "./temp/sofa1.jpg",
		type: "name1",
		price: 6000,
		location: "Mumbai",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash1@gmail.com",
	},
	{
		id: 2,
		image: "./temp/sofa2.jpg",
		type: "name2",
		price: 2030,
		location: "pune",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash2@gmail.com",
	},
	{
		id: 3,
		image: "./temp/sofa3.jpg",
		type: "name3",
		price: 3400,
		location: "delhi",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash3@gmail.com",
	},
	{
		id: 4,
		image: "./temp/sofa3.jpg",
		type: "name4",
		price: 8700,
		location: "Mumbai",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash4@gmail.com",
	},
	{
		id: 5,
		image: "./temp/sofa5.jpg",
		type: "name5",
		price: 5600,
		location: "pune",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash5@gmail.com",
	},
	{
		id: 6,
		image: "./temp/bed1.webp",
		type: "name",
		price: 1200,
		location: "Mumbai",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash6@gmail.com",
	},
	{
		id: 7,
		image: "./temp/bed2.jpg",
		type: "name7",
		price: 9800,
		location: "nagpur",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash@gmail.com",
	},
	{
		id: 8,
		image: "./temp/bed3.jpg",
		type: "name8",
		price: 10000,
		location: "nagpur",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash@gmail.com",
	},
	{
		id: 9,
		image: "./temp/bed4.jpg",
		type: "namehouse",
		price: 4900,
		location: "delhi",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash@gmail.com",
	},
	{
		id: 10,
		image: "./temp/bed5.jpg",
		type: "namehouse",
		price: 7500,
		location: "bed",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash@gmail.com",
	},
	{
		id: 11,
		image: "./temp/chair1.jpg",
		type: "name11",
		price: 8000,
		location: "pune",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash@gmail.com",
	},
	{
		id: 12,
		image: "./temp/chair2.jpg",
		type: "name11",
		price: 1900,
		location: "Mumbai",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash@gmail.com",
	},
	{
		id: 13,
		image: "./temp/chair3.jpg",
		type: "name11",
		price: 2900,
		location: "delhi",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash@gmail.com",
	},
	{
		id: 14,
		image: "./temp/chair4.jpg",
		type: "name11",
		price: 8000,
		location: "pune",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash@gmail.com",
	},
	{
		id: 15,
		image: "./temp/chair5.jpg",
		type: "name11",
		price: 4200,
		location: "nagpur",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash@gmail.com",
	},
	{
		id: 16,
		image: "./temp/desk1.jpg",
		type: "name",
		price: 900,
		location: "jalgaon",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash@gmail.com",
	},
	{
		id: 17,
		image: "./temp/desk2.jpg",
		type: "name11",
		price: 8000,
		location: "pune",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash@gmail.com",
	},
	{
		id: 18,
		image: "./temp/desk3.jpg",
		type: "name",
		price: 9900,
		location: "hydrabad",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash@gmail.com",
	},
	{
		id: 19,
		image: "./temp/desk4.jpg",
		type: "name",
		price: 3700,
		location: "jalgaon",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash@gmail.com",
	},
	{
		id: 20,
		image: "./temp/desk5.webp",
		type: "name",
		price: 7050,
		location: "jalgaon",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		contact: "yash@gmail.com",
	},
];

const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");
let arr;
const search = document.querySelector(".search");
let search_arr;
const range = document.querySelector(".range");
let range_arr = document.querySelector(".range");
const range_otp = document.querySelector(".range-otp");
range_otp.textContent = ` Rs. ${range.value * 100}`;

range.addEventListener("change", (e) => {
	// console.log(e.target.value * 100);
	range_arr = products.filter((product) => {
		return product.price <= e.target.value * 100;
	});
	range_otp.textContent = ` Rs. ${e.target.value * 100}`;

	if (range_arr.length === 0) {
		mainContent.innerHTML = "<h2>No product found !</h2>";
	} else {
		displayProducts(range_arr);
	}
});

search.addEventListener("keyup", (e) => {
	console.log(e.target.value);

	if (e.target.value === "") {
		mainContent.innerHTML = "<h2>Please enter some value</h2>";
		return;
	} else {
		search_arr = products.filter((product) => {
			return product.location
				.toLowerCase()
				.includes(e.target.value.toLowerCase());
		});
	}
	//show message
	if (search_arr.length === 0) {
		mainContent.innerHTML = "<h2>No product found !</h2>";
	} else {
		displayProducts(search_arr);
	}
});

sidebar.addEventListener("click", (e) => {
	if (e.target.classList.contains("list")) {
		console.log(e.target);
		if (e.target.dataset.id === "all") {
			arr = products;
		} else {
			arr = products.filter((value) => {
				return value.location === e.target.dataset.id;
			});
		}

		console.log(arr);
		//show message
		if (arr.length === 0) {
			mainContent.innerHTML = "<h2>No product found !</h2>";
		} else {
			displayProducts(arr);
		}
	}
});

const displayProducts = (products) => {
	mainContent.innerHTML = "";
	products.forEach((product) => {
		const element = `<div class="product" data-id="${product.id}">
                <img src="${product.image}" alt="${product.type}" data-id="${product.id}"><br>
                <span class="name">${product.type}</span><br>
                <span class="price">Rs. ${product.price}</span>
                </div>`;
		const div = document.createElement("div");
		div.innerHTML += element;
		mainContent.append(div);
	});
};
//initial page
displayProducts(products);

//open modal box
const modal = document.querySelector(".modal");
const modal_img = document.querySelector(".modal-img");
const modal_name = document.querySelector(".modal-name");
const modal_price = document.querySelector(".modal-price");
const modal_desc = document.querySelector(".modal-desc");
const modal_contact = document.querySelector(".modal-contact-btn");

let modal_product;

mainContent.addEventListener("click", (e) => {
	const id = e.target.dataset.id;
	if (id) {
		console.log(typeof id);
		modal_product = products.filter((product) => {
			return product.id == id;
		});
		console.log(modal_product);
		modal_img.src = modal_product[0].image;
		modal_name.textContent = `this ${modal_product[0].type} can be yours`;
		modal_price.textContent = `Rs. ${modal_product[0].price}`;
		modal_desc.textContent = modal_product[0].desc;
		modal_contact.dataset.contact = modal_product[0].contact;

		modal.style.display = "block";
	}
});

document.querySelector(".modal-cross").addEventListener("click", (e) => {
	modal.style.display = "none";
});

modal_contact.addEventListener("click", (e) => {
	console.log(e.target.dataset.contact);
});


//Adding property 

const plus = document.querySelector(".add-plus");
const nav_btn = document.querySelector(".nav-btn");
const parent = document.querySelector(".parent");
const add_parent = document.querySelector(".add-parent");

// parent.style.display = "flex"
//closures can be used here
// plus.addEventListener('click', (e)=>{
// 	nav_btn.textContent = "buy";
// 	e.target.textContent === "sell"
// 	add_parent.style.display = "block"


// })

nav_btn.addEventListener('click', (e)=>{
	console.log(e.target.textContent)
	if(e.target.textContent === "buy"){
		parent.style.display = "flex";
		add_parent.style.display = "none";
		// e.target.textContent === "buy";
	}
	if(e.target.textContent === "sell"){
		parent.style.display = "none";
		add_parent.style.display = "block";
	}
	e.target.textContent = (parent.style.display === "none") ? "buy" : "sell";
})
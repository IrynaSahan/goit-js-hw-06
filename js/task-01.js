const navEl = document.querySelectorAll('.item');
console.log('Number of categories:', navEl.length);

for (const item of navEl) {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
};

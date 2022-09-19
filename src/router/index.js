const files = import.meta.globEager('../pages/*/index.jsx');
const routes = Object.keys(files).map(k => files[k].default);
// console.log("🚀 ~ file: index.js ~ line 16 ~ files", files,res)
export default routes
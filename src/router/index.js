const files = import.meta.globEager('../pages/*/index.jsx');
const routes = Object.keys(files).map(k => files[k].default);
const navBars = routes.filter(route=>route.isNav).sort((a,b)=>(a.sort-b.sort))
// console.log("🚀 ~ file: index.js ~ line 16 ~ files", files,res)
export {
    navBars
}
export default routes
let filterProduct = (data,cat,setFilter) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList)
}
export default filterProduct
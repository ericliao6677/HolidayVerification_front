(async () => {
    const res = await fetch("https://localhost:7002/api/Holiday/Get",{
        credentials: 'include'
    });
    const resData = await res.json();
    console.log(resData);
})();
function getURLQuery() {
    let y = {};
    let v = window.location.href;
    if (v.indexOf('?') > -1)
    {
        let z = v.split("?");
        let x = z[1].split("&");
        x.forEach(function (item, index) {
            let w = item.split("=")
            y[w[0]] = decodeURIComponent(w[1]);
        });
        return y;
    } else {
        return null;
    }
}
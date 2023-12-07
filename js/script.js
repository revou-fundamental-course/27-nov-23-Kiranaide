function rumus(props) {
    if (props === 'luas') {
        document.getElementById('luas').style.display = "flex";
        document.getElementById('keliling').style.display = "none";
    } else if (props === 'keliling') {
        document.getElementById('luas').style.display = "none";
        document.getElementById('keliling').style.display = "flex";
    }
}

function luas(alas,tinggi) {
    const luasSegitiga = (parseInt(alas.value) * parseInt(tinggi.value)) / 2;
    document.querySelector('#luas .rumus').textContent = 'L = 1/2 x a x t';
    document.querySelector('#luas .penyelesaian').textContent = `L = 1/2 x ${alas.value} x ${tinggi.value}`
    document.querySelector('#luas .hasilnya').textContent = 'L = ' + luasSegitiga;
}

function keliling(s1,s2,s3) {
    const kelilingSegitiga = (parseInt(s1.value) + parseInt(s2.value) + parseInt
    (s3.value))
    document.querySelector('#keliling .rumus').textContent = 'K = S1 + S2 + S3';
    document.querySelector('#keliling .penyelesaian').textContent = `K = ${s1.value} + ${s2.value} + ${s3.value}`
    document.querySelector('#keliling .hasilnya').textContent = 'K = ' + kelilingSegitiga;
}
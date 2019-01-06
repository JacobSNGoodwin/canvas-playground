import './styles.scss'

window.addEventListener('load', draw());

function draw() {
  let canvas = document.getElementById('image');

  const ctx = canvas.getContext('2d');

  let img = new Image();

  img.onload = function() {
    const width = img.width;
    const height = img.height;
    console.log(`Image Width: ${width} / Image Height: ${height}`)

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0,0);
  }

  // img.src = 'HighSierra.jpg';
  img.src = 'https://lh3.googleusercontent.com/4Mexp2njsWfQS41kHNuBm4t9gptSL1NHM54GDwesDKL06SuI1BsRLZmPZZAtnxom2uUtwkV3uic4TFZVGiDEL37Cx28_3m6VcqtY20lUjnkXKo4r2gQjd-uxJXx5AMGmtfkM5ir_va_DQLRjvaPbdKBwxPgEBQ54BEP3Y3U9hg2g2mJ4mLJ7DuJnT5STlZn94Viy4UmK1BrKiNTo-OSJia3w6wheR2wuQPMDBkCpYGCZXRlOEgfBOHt9cFx6g_ne39OaW03etsIRstkgf7Eq_qd-N_us5Ybs87zkpEObEN5ySCQZwM6CmVm8vi6qvtskHHRuDCzkmpsfcv-W9mooX2RmZHzR-zTli0WFuso21P9CEYhovvqHZWeIPFPVZXisVsH1CAAkSjZ73pA672Y4DR6BEZfCPK3nC7lORwxWnbcE6aSB0SuvBPhcvM7pEg8_0ive6fD29t4Iiq4OB1K_nUgO14n_XWEOKAi0y8GDjCv_3iR_sbJSP0znSyrCXjNrvqndAJHPwvPA1XHmW_xCZLc-nZWyzgVzCnWggX-C8DY1nkYs3wxlspRYtZgWqo5aoD3jZp01z9Ve7eRpVKkVJCAExWlLiusA1NRtdJpaTR6y3QhSBUr6ORaUvNwzz1zsWo2Rqm83ZWw990b1Hu6Z02As-w=w2914-h1942-no';
    
}
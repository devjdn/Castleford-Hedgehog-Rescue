const pageId = 'Castlefordrescue';
const accessToken = 'EAAGP6zqMDWABO9BGdEhexEiv6oIHfuFaV38k8akqQ9db2TssSAnTNtTSWPoKzHnxx99JibeHm3lak9cIowaPudK9gd1obOAWQHYZBmJ3MB4NwJWWX46ABDFw72ZA86TaBVNImcz8g2y1TZCUW35OkWmKKJZA8FzZArPPMAWGy4ZAGszTRnk3ZCF2xr4Gp8L2B3NIh2IzlRzJvPJbBv5aUSM2MI9qKWWnH4MJmGawm5WJ2n96QRdpZBrhZCaZCrUIMDSN6V1x1kdAZDZD';

fetch('https://graph.facebook.com/v12.0/me/posts?access_token=EAAGP6zqMDWABO9BGdEhexEiv6oIHfuFaV38k8akqQ9db2TssSAnTNtTSWPoKzHnxx99JibeHm3lak9cIowaPudK9gd1obOAWQHYZBmJ3MB4NwJWWX46ABDFw72ZA86TaBVNImcz8g2y1TZCUW35OkWmKKJZA8FzZArPPMAWGy4ZAGszTRnk3ZCF2xr4Gp8L2B3NIh2IzlRzJvPJbBv5aUSM2MI9qKWWnH4MJmGawm5WJ2n96QRdpZBrhZCaZCrUIMDSN6V1x1kdAZDZD')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
  });

function logaOI() {
  console.log('oi');
}

function logaXAU() {
  console.log('xau');
}

let count = 0;

const aumentaCount = () => {
  count = count + 1;
  console.log(count);
};

document.addEventListener('click', aumentaCount);

checkCount = () => {
  if (count >= 3) {
    console.log('acabou');
    count = 0;
  }
};

const total = {
  logaoi: logaOI,
  logaxau: logaXAU,
};

const endTurn = () => {
  if (count >= 3) {
    Object.values(total).forEach((value) => {
      value.call();
    });
    count = 0;
    console.log(count);
  }
};
setInterval(endTurn, 100);

total['logaSim'] = function () {
  console.log('sim');
};

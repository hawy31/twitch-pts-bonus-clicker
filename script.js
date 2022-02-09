(function() {
let buttonCount = 0;
const basePts = 60;

const claimInterval = setInterval(() => {
    const claimBtn = document.querySelector('button[aria-label="Claim Bonus"');
    if (claimBtn) {
    	claimBtn.click();
      buttonCount++;
    }
    console.log(`Buttons clicked: ${buttonCount} times. Points earned: ${basePts * buttonCount}`);
}, 60000);

})();



var currency_State_Array = ["CAD","USD","KRW"];
//CAD - USD - price
//CAD - KRW - price
//USD - CAD
//USD - KRW
//KRW - CAD
//KRW - USD

// Constructor
function Item(id, n, p, q, m, c,cs,r,d,img)
{
  let addreivews = ["good","satisfied","bad"];
  this.itemID = id; //display
  this.nproduct = n;//display

  this.price = p;

  this.qty = q;//display
  this.max = m;//display
  this.category = c; //display
  this.costOfShipping = cs;
  this.reviews = addreivews;
  this.description = d;
  this.image = img;//display
}
function cartItem(id,p,q,s)
{
  this.itemID = id;
  this.price = p;
  this.qty =q;
  this.shipping =s;
}

function generateTrackingNumber()
{
  const TN_LENGTH = 10;
  const TN_PREFIX = "IWD";
  var tokens = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];
  var trackingNumber = new String(TN_PREFIX);
  for(var x = 0; x < TN_LENGTH; x++) {
    trackingNumber = trackingNumber.concat( tokens[ Math.floor( Math.random() * tokens.length ) ] );
  }
  console.log("Generated: " + trackingNumber);
  return trackingNumber;
} // end generateTrackingNumber

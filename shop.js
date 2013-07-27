function Current() {
	this.CURR = null;
	this.prev = null;
	this.next = null;
}

function CustType() {
  this.firstName = "";
  this.next = null;
  this.invs = null;
}

function InvType() {
  this.no = 0;
  this.next = null;
  this.lines = null;
}

function List() {
  this.list = null;
  this.add = function(ObjType, OBJ) {
	OBJ.prev = OBJ.CURR;
	OBJ.CURR = new ObjType();
	if (OBJ.prev == null) {
		this.list = OBJ.CURR;
	}
	else {
		OBJ.prev.next = OBJ.CURR;
	}
  };
}

CUST = new Current();
INV = new Current();
var testCustList = new List();
testCustList.add(CustType, CUST);
CUST.CURR.firstName = "1";
testCustList.add(CustType, CUST);
CUST.CURR.firstName = "2";
testCustList.add(CustType, CUST);
CUST.CURR.firstName = "3";
CUST.CURR.invs = new List();
CUST.CURR.invs.add(InvType, INV);

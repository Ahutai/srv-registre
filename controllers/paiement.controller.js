const { createSession } = require("../queries/paiement.queries");
const {
  createUser,
  getUserByUsername,
  getSfile,
  findAllUser,
  // updateUsername,
  // updatesUsername,
  updatesPassword,
} = require("../queries/users.queries");
const {
  getFolderToUser,
  // getFolder,
  getPostedd,
  sfile,
  getposted,
  getfilee,
  findUsername,
  findUsernames,
  findUsernamess,
  findUsernamee,
  findonee,
  listnivIII,
  listfoldernivii,
  getFileNivI,
  getcontentnivii,
  listfilenivIII,
  createsPost,
  findAccessNivZERO,
  FindAccessNivI,
  getPostUser,
  findAuthorFolderNivZeroUser,
  findUsernameFolderNivZeroUser,
  createFolderUserNivZero,
  idListPostNivII,
  getFileUser,
  findAuthorFolderNivIUser,
  findUsernameFolderNivIUser,
  createFolderUserNivI,
  createPaniers,
  findpanier,
  findpanierr,
  resultfind,
  quantfind,
  createawaitcomm,
  findawaitcomm,
  findawaitcommm,
  findauthorbyusername,
  delpanierr,
  delpanierrr,
  statusawaitadd,
} = require("../queries/shared.queries");

const { getFolderByUser } = require("../queries/posts.queries");

const stripe = require("stripe")(
  "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"
);

exports.paiement = async (req, res, next) => {
  try {
    const value = req.params.value;
    const euro = value / 120;
    const francs = euro.toFixed(0);
    const result = francs * 100;
    const domaine = "https://areni-hatiki.com";
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "SCULPTURES",
            },
            unit_amount: "100",
            tax_behavior: "exclusive",
          },
          quantity: 1,
        },
      ],
      automatic_tax: {
        enabled: true,
      },
      mode: "payment",
      success_url: `${domaine}/paiement/success/684b0f6b4205045b1df1d6da`,
      cancel_url: `${domaine}/paiement/cancel`,
      automatic_tax: { enabled: true },
    });
    res.redirect(303, session.url);
  } catch (e) {
    next(e);
  }
};

exports.success = async (req, res, next) => {
  try {
    const arr = [];
    let username;
    const postId = req.params.postId;
    const users = await findUsername(postId);
    arr.push(users);
    arr.forEach((r) => {
      r.forEach((t) => {
        username = t.username;
      });
    });
    const findds = await getFileNivI(postId);
    const content = await getposted(postId);
    const user = await getUserByUsername(username);
    const postes = await getFolderByUser(user);
    const findaccessnivzero = await findAccessNivZERO(postId);
    const panier = await findpanier(postId);
    const result = await resultfind(req.user._id.toString());
    const quant = await quantfind(req.user._id.toString());
    const findone = await findonee(postId);
    let tabb = [];
    quant.forEach((r) => {
      tabb.push(r.quant);
    });
    let resull, resultatt, resultatee;
    const initialValuee = 0;
    const sumWithInitiall = tabb.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValuee
    );
    const resultatttt = sumWithInitiall.toString() + " pièces";
    // if (resultatttt > 10000) {
    //   resull = resultatttt / 1000;
    //   resultatt = resul.toFixed(3) + " pièces";
    // }
    // if (resultatttt > 100000) {
    //   resull = resultatttt / 1000;
    //   resultatt = resul.toFixed(3) + " pièces";
    // }
    let tab = [];
    result.forEach((r) => {
      tab.push(r.total);
    });
    let resul, resultat, three, threee, pureresult;
    const initialValue = 0;
    const sumWithInitial = tab.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    console.log(sumWithInitial);
    const resultattt = sumWithInitial.toString();
    if (resultattt > 900) {
      three = resultattt / 1000 / 3;
      threee = three.toFixed(3) + " F";
    }
    if (resultattt > 10000) {
      three = resultattt / 1000 / 3;
      threee = three.toFixed(3) + " F";
    }
    if (resultattt > 100000) {
      three = resultattt / 1000 / 3;
      threee = three.toFixed(3) + " F";
    }
    if (resultattt > 900) {
      resul = resultattt / 1000;
      pureresult = resultattt;
      resultat = resul.toFixed(3) + " F";
    }
    if (resultattt > 10000) {
      resul = resultattt / 1000;
      pureresult = resultattt;
      resultat = resul.toFixed(3) + " F";
    }
    if (resultattt > 100000) {
      resul = resultattt / 1000;
      pureresult = resultattt;
      resultat = resul.toFixed(3) + " F";
    }
    // tab.forEach((t) => {
    //   console.log(t);
    // });
    res.render("posts/post", {
      username,
      result,
      resultat,
      threee,
      pureresult,
      panierlock: true,
      resultatttt,
      findaccessnivzero,
      findds,
      panier,
      postes,
      findone,
      content,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      paiement: true,
      editable: false,
      findfoldernivzero: false,
      nivuser: "0",
      findpaiement: false,
    });
  } catch (e) {
    next(e);
  }
};

exports.cancel = async (req, res, next) => {
  try {
    const arr = [];
    let username;
    const postId = req.params.postId;
    const users = await findUsername(postId);
    arr.push(users);
    arr.forEach((r) => {
      r.forEach((t) => {
        username = t.username;
      });
    });
    const findds = await getFileNivI(postId);
    const content = await getposted(postId);
    const user = await getUserByUsername(username);
    const postes = await getFolderByUser(user);
    const findaccessnivzero = await findAccessNivZERO(postId);
    const panier = await findpanier(postId);
    const result = await resultfind(req.user._id.toString());
    const quant = await quantfind(req.user._id.toString());
    const findone = await findonee(postId);
    let tabb = [];
    quant.forEach((r) => {
      tabb.push(r.quant);
    });
    let resull, resultatt, resultatee;
    const initialValuee = 0;
    const sumWithInitiall = tabb.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValuee
    );
    const resultatttt = sumWithInitiall.toString() + " pièces";
    // if (resultatttt > 10000) {
    //   resull = resultatttt / 1000;
    //   resultatt = resul.toFixed(3) + " pièces";
    // }
    // if (resultatttt > 100000) {
    //   resull = resultatttt / 1000;
    //   resultatt = resul.toFixed(3) + " pièces";
    // }
    let tab = [];
    result.forEach((r) => {
      tab.push(r.total);
    });
    let resul, resultat, three, threee, pureresult;
    const initialValue = 0;
    const sumWithInitial = tab.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    console.log(sumWithInitial);
    const resultattt = sumWithInitial.toString();
    if (resultattt > 900) {
      three = resultattt / 1000 / 3;
      threee = three.toFixed(3) + " F";
    }
    if (resultattt > 10000) {
      three = resultattt / 1000 / 3;
      threee = three.toFixed(3) + " F";
    }
    if (resultattt > 100000) {
      three = resultattt / 1000 / 3;
      threee = three.toFixed(3) + " F";
    }
    if (resultattt > 900) {
      resul = resultattt / 1000;
      pureresult = resultattt;
      resultat = resul.toFixed(3) + " F";
    }
    if (resultattt > 10000) {
      resul = resultattt / 1000;
      pureresult = resultattt;
      resultat = resul.toFixed(3) + " F";
    }
    if (resultattt > 100000) {
      resul = resultattt / 1000;
      pureresult = resultattt;
      resultat = resul.toFixed(3) + " F";
    }
    // tab.forEach((t) => {
    //   console.log(t);
    // });
    res.render("posts/post", {
      username,
      result,
      resultat,
      threee,
      pureresult,
      panierlock: true,
      resultatttt,
      findaccessnivzero,
      findds,
      panier,
      postes,
      findone,
      content,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      paiement: false,
      editable: false,
      findfoldernivzero: false,
      nivuser: "0",
      findpaiement: false,
    });
  } catch (e) {
    next(e);
  }
};

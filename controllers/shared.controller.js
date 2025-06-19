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

const util = require("util");

const path = require("path");
const multer = require("multer");
const { TIMEOUT } = require("dns");
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../public/upload"));
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

exports.sfileFind = async (req, res, next) => {
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
    // console.log(req.user);
    const find = await getPostedd(postId);
    const findds = await getFileNivI(postId);
    const content = await getposted(postId);
    const user = await getUserByUsername(username);
    const postes = await getFolderByUser(user);
    const findaccessnivzero = await findAccessNivZERO(postId);
    res.render("posts/post", {
      username,
      find,
      findaccessnivzero,
      findds,
      postes,
      content,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      editable: false,
      findfoldernivzero: false,
      nivuser: "0",
      produits: true,
    });
  } catch (e) {
    next(e);
  }
};

exports.sfileFindPanierr = async (req, res, next) => {
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
    const user = await getUserByUsername(username);
    const postes = await getFolderByUser(user);
    const content = await getposted(postId);
    const panierr = await findpanierr(postId);
    res.render("posts/post", {
      panierr,
      postes,
      content,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      editable: false,
      findfoldernivzero: false,
      nivuser: "0",
    });
  } catch (e) {
    next(e);
  }
};

exports.sfileFindAwaitCommm = async (req, res, next) => {
  try {
    const arr = [];
    let username, newid;
    const postId = req.params.postId;
    const awaitcommm = await findawaitcommm(postId);
    console.log(awaitcommm);
    awaitcommm.forEach((r) => {
      newid = r.author.toString();
    });
    const users = await findUsername(newid);
    arr.push(users);
    arr.forEach((r) => {
      r.forEach((t) => {
        username = t.username;
      });
    });
    const find = await getPostedd(newid);
    const content = await getposted(newid);
    const user = await getUserByUsername(username);
    const postes = await getFolderByUser(user);
    const findaccessnivzero = await findAccessNivZERO(newid);
    let tabs = [];
    awaitcommm.forEach((r) => {
      r.title.forEach((t) => {
        tabs.push(t);
      });
    });
    const nivi = tabs[0];
    const nivii = tabs[1];
    const niviii = tabs[2];
    const niviiii = tabs[3];
    const niviiiii = tabs[4];
    let tabss = [];
    awaitcommm.forEach((r) => {
      r.result.forEach((t) => {
        tabss.push(t);
      });
    });
    const prixi = tabss[0];
    const prixii = tabss[1];
    const prixiii = tabss[2];
    const prixiiii = tabss[3];
    const prixiiiii = tabss[4];
    let tabsss = [];
    awaitcommm.forEach((r) => {
      r.quantiter.forEach((t) => {
        tabsss.push(t);
      });
    });
    const quanti = tabsss[0];
    const quantii = tabsss[1];
    const quantiii = tabsss[2];
    const quantiiii = tabsss[3];
    const quantiiiii = tabsss[4];
    let tabssss = [];
    awaitcommm.forEach((r) => {
      r.format.forEach((t) => {
        tabssss.push(t);
      });
    });
    const formati = tabssss[0];
    const formatii = tabssss[1];
    const formatiii = tabssss[2];
    const formatiiii = tabssss[3];
    const formatiiiii = tabssss[4];
    const result = await resultfind(postId);
    const quant = await quantfind(postId);
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
    let resul, resultat, resultate;
    const initialValue = 0;
    const sumWithInitial = tab.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    console.log(sumWithInitial);
    const resultattt = sumWithInitial.toString();
    if (resultattt > 10000) {
      resul = resultattt / 1000;
      resultat = resul.toFixed(3) + " F";
    }
    if (resultattt > 100000) {
      resul = resultattt / 1000;
      resultat = resul.toFixed(3) + " F";
    }
    // tab.forEach((t) => {
    //   console.log(t);
    // });
    res.render("posts/post", {
      username,
      find,
      result,
      resultat,
      resultatttt,
      findaccessnivzero,
      nivi,
      nivii,
      niviii,
      niviiii,
      niviiiii,
      prixi,
      prixii,
      prixiii,
      prixiiii,
      prixiiiii,
      quanti,
      quantii,
      quantiii,
      quantiiii,
      quantiiiii,
      formati,
      formatii,
      formatiii,
      formatiiii,
      formatiiiii,
      awaitcommm,
      awaitcommfindd: true,
      postes,
      content,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      editable: false,
      findfoldernivzero: false,
      nivuserr: "0",
    });
  } catch (e) {
    next(e);
  }
};

exports.sfileFindAwaitComm = async (req, res, next) => {
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
    const find = await getPostedd(postId);
    const content = await getposted(postId);
    const user = await getUserByUsername(username);
    const postes = await getFolderByUser(user);
    const findaccessnivzero = await findAccessNivZERO(postId);
    const awaitcomm = await findawaitcomm(postId);
    console.log(awaitcomm);
    let tabs = [];
    awaitcomm.forEach((r) => {
      r.title.forEach((t) => {
        tabs.push(t);
      });
    });
    const nivi = tabs[0];
    const nivii = tabs[1];
    const niviii = tabs[2];
    const niviiii = tabs[3];
    const niviiiii = tabs[4];
    let tabss = [];
    awaitcomm.forEach((r) => {
      r.result.forEach((t) => {
        tabss.push(t);
      });
    });
    const prixi = tabss[0];
    const prixii = tabss[1];
    const prixiii = tabss[2];
    const prixiiii = tabss[3];
    const prixiiiii = tabss[4];
    let tabsss = [];
    awaitcomm.forEach((r) => {
      r.quantiter.forEach((t) => {
        tabsss.push(t);
      });
    });
    const quanti = tabsss[0];
    const quantii = tabsss[1];
    const quantiii = tabsss[2];
    const quantiiii = tabsss[3];
    const quantiiiii = tabsss[4];
    let tabssss = [];
    awaitcomm.forEach((r) => {
      r.format.forEach((t) => {
        tabssss.push(t);
      });
    });
    const formati = tabssss[0];
    const formatii = tabssss[1];
    const formatiii = tabssss[2];
    const formatiiii = tabssss[3];
    const formatiiiii = tabssss[4];
    const result = await resultfind(postId);
    const quant = await quantfind(postId);
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
    let resul, resultat, resultate;
    const initialValue = 0;
    const sumWithInitial = tab.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    console.log(sumWithInitial);
    const resultattt = sumWithInitial.toString();
    if (resultattt > 10000) {
      resul = resultattt / 1000;
      resultat = resul.toFixed(3) + " F";
    }
    if (resultattt > 100000) {
      resul = resultattt / 1000;
      resultat = resul.toFixed(3) + " F";
    }
    // tab.forEach((t) => {
    //   console.log(t);
    // });
    res.render("posts/post", {
      username,
      find,
      result,
      resultat,
      resultatttt,
      findaccessnivzero,
      nivi,
      nivii,
      niviii,
      niviiii,
      niviiiii,
      prixi,
      prixii,
      prixiii,
      prixiiii,
      prixiiiii,
      quanti,
      quantii,
      quantiii,
      quantiiii,
      quantiiiii,
      formati,
      formatii,
      formatiii,
      formatiiii,
      formatiiiii,
      awaitcomm,
      awaitcommfind: true,
      postes,
      content,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      editable: false,
      findfoldernivzero: false,
      nivuser: "0",
    });
  } catch (e) {
    next(e);
  }
};

exports.sfileFindPanier = async (req, res, next) => {
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
    let resul, resultat, three, threee;
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
      resultat = resul.toFixed(3) + " F";
    }
    if (resultattt > 10000) {
      resul = resultattt / 1000;
      resultat = resul.toFixed(3) + " F";
    }
    if (resultattt > 100000) {
      resul = resultattt / 1000;
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
      panierlock: true,
      resultatttt,
      findaccessnivzero,
      findds,
      panier,
      postes,
      content,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      editable: false,
      findfoldernivzero: false,
      nivuser: "0",
    });
  } catch (e) {
    next(e);
  }
};

exports.createPanier = async (req, res, next) => {
  try {
    const body = req.body;
    const titlee = body.title;
    const formatt = body.format;
    const quantitéé = body.quantité;
    const prixx = body.prix;
    const postId = req.params.postId;
    const dates = new Date();
    const datered = dates.toDateString();
    const awai = [];
    const authorss = await findAuthorFolderNivZeroUser(postId);
    awai.push(authorss.author);
    const authors = awai.toString();
    const arr = [];
    let usered;
    const users = await findUsernameFolderNivZeroUser(postId);
    arr.push(users);
    arr.forEach((r) => {
      r.forEach((t) => {
        usered = t.username;
      });
    });
    let resultt, resultat, resul, three;
    const totall = body.prix * body.quantité;
    const quantt = body.quantité;
    resultt = body.prix * body.quantité;
    three = (body.prix * body.quantité) / 3;
    if (resultt > 900) {
      resul = resultt / 1000;
      resultat = resul.toFixed(3) + " F";
    }
    if (resultt > 10000) {
      resul = resultt / 1000;
      resultat = resul.toFixed(3) + " F";
    }
    if (resultt > 100000) {
      resul = resultt / 1000;
      resultat = resul.toFixed(3) + " F";
    }
    await createPaniers({
      ...body,
      author: postId,
      authors: authors,
      username: req.user.username,
      date: datered,
      title: titlee,
      formatt: formatt,
      quantité: quantitéé,
      prix: prixx,
      result: resultat,
      total: totall,
      quant: quantt,
      auth: req.user._id.toString(),
    });
    res.redirect("/shared/spost/" + "684a13da51a8dc62b71f0561");
  } catch (e) {
    const errorss = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("posts/post", { errorss });
  }
};

exports.awaitcommande = async (req, res, next) => {
  try {
    const body = req.body;
    const titlee = body.title;
    const formatt = body.format;
    const quantiter = body.quantiter;
    const prixx = body.prix;
    const resultt = body.result;
    const pay = body.pay;
    const exp = body.exp;
    console.log(body);
    const one = body.one;
    const three = body.three;
    const threes = body.threes;
    const ile = body.ile;
    const name = body.nom;
    const datee = body.date;
    const bateau = body.bateau;
    const avion = body.avion;
    const quantt = body.quant;
    const totall = body.total;
    const commandename = body.commandename;
    const commandenamee = commandename.toUpperCase();
    const postId = req.params.postId;
    const dates = new Date();
    const datered = dates.toLocaleDateString();
    const awai = [];
    const authorss = await findAuthorFolderNivZeroUser(postId);
    awai.push(authorss.author);
    const authors = awai.toString();
    const arr = [];
    let usered;
    const users = await findUsernameFolderNivZeroUser(postId);
    arr.push(users);
    arr.forEach((r) => {
      r.forEach((t) => {
        usered = t.username;
      });
    });
    const nom = req.user.local.nom;
    const email = req.user.local.email;
    const tel = req.user.local.tel;
    const delpanier = await delpanierr(req.user.username);
    await delpanierrr(delpanier.auth);
    // let resultt, resultat, resul;
    // const totall = body.prix * bodyy.quantité;
    // const quantt = body.quantité;
    // resultt = bodyy.prix * bodyy.quantité;
    // if (resultt > 10000) {
    //   resul = resultt / 1000;
    //   resultat = resul.toFixed(3) + " F";
    // }
    // if (resultt > 100000) {
    //   resul = resultt / 1000;
    //   resultat = resul.toFixed(3) + " F";
    // }
    await createawaitcomm({
      ...body,
      title: titlee,
      format: formatt,
      quantiter: quantiter,
      result: resultt,
      date: datee,
      exp: exp,
      ile: ile,
      bateau: bateau,
      avion: avion,
      author: postId,
      authors: authors,
      username: req.user.username,
      commandename: commandenamee,
      quant: quantt,
      total: totall,
      datered: datered,
      email: email,
      nom: nom,
      tel: tel,
      status: "en attente...",
      one: one,
      three: three,
      threes: threes,
      pay: pay,
    });
    res.redirect("/shared/findawaitcomm/" + "684b8a55ab41d7225206b9ad");
  } catch (e) {
    const errorss = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("posts/post", { errorss });
  }
};

exports.statusadd = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const body = req.body;
    let result;
    if (body.enattentex1 === "on") {
      result = "en attente x1";
    } else {
    }
    if (body.enattentex2 === "on") {
      result = "en attente x2";
    } else {
    }
    if (body.enattentex3 === "on") {
      result = "en attente x3";
    } else {
    }
    if (body.enattentetotal === "on") {
      result = "en attente total";
    } else {
    }
    if (body.encours === "on") {
      result = "en cours...";
    } else {
    }
    if (body.terminer === "on") {
      result = "terminé...";
    } else {
    }
    if (body.expedition === "on") {
      result = "expédition...";
    } else {
    }
    if (body.livrer === "on") {
      result = "livrée ...";
    } else {
    }
    await statusawaitadd(postId, result);
    res.redirect("/shared/findawaitcommm/" + postId);
  } catch (e) {
    const errorss = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("posts/post", { errorss });
  }
};


// Mailjet API
const API_PUBLIC = 'a75e20fd6db27f16992af33051331e09';
const API_SECRET = 'f01c102a8592528de92cea277030225a';
const mailjet = require ('node-mailjet').connect(API_PUBLIC, API_SECRET);


exports.post = (req, res, next) => {
  res.status(201).send('Requisição recebida com sucesso!');
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

exports.postWithJson = (req, res, next) => {

  var visitante = req.body;
  console.log(visitante.firstname);

  res.status(200).json({
    visitante: visitante
  });

};

exports.sendMailjet = (req, res, next) => {

  var contato = req.body;
  console.log(contato);

  const request = mailjet
	.post("send", {'version': 'v3.1'})
	.request({
		"Messages":[
			{
				"From": {
					"Email": "victormath12@hotmail.com",
					"Name": "Rede Jovem START"
				},
				"To": [
					{
						"Email": contato.email,
						"Name": contato.firstname
					}
				],
				"TemplateID": 380955,
				"TemplateLanguage": true,
				"Subject": "Seja Bem Vindo",
				"Variables": {
          "firstname": contato.firstname
        }
			}
		]
	})
  request.then((result) => {
    res.status(200).json({
      status: 200,
      message: "Mensagem Enviada com sucesso!",
      sentTo: contato
    });
	}).catch((err) => {
    console.log("Mailjet Fail: " + err);
    res.status(500);
	})

};


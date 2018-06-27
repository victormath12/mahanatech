
// Mailjet API
const API_PUBLIC = 'd6d6bf093196e20d7c9f1d9e9302ad42';
const API_SECRET = 'd99f797e70bb6d75a9dfda9339575f29';
const mailjet = require('node-mailjet').connect(API_PUBLIC, API_SECRET);


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
					"Email": "lucasftecinfo@gmail.com",
					"Name": "Igreja Mahanaim"
				},
				"To": [
					{
						"Email": contato.email,
						"Name": contato.firstname
					}
				],
				"TemplateID": 351469,
				"TemplateLanguage": true,
				"Subject": "Igreja Mahanaim | Bem Vindos",
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


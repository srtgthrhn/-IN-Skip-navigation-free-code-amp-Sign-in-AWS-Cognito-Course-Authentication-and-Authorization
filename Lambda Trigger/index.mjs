export const handler = async (event) => {

  const allowedDomains = ["example.com", "tricksumo.com", "aws.com"];

  const email = event.request.userAttributes.email;
  const domain = email.split("@")[1].toLowerCase();

  if (!allowedDomains.includes(domain)) {
    throw new Error(`Email domain '${domain}' is not allowed.`);
  }

  return event;
};

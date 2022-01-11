import SigmaAcademic from "../src";

const deusto = new SigmaAcademic({
  baseURL: "https://gaude.deusto.es",
  interceptToken: true,
});

async function main() {
  const loginResponse = await deusto.login({
    usuario: "<username goes here>",
    password: "<password goes here>",
  });

  if (loginResponse.errorCode !== 0)
    throw new Error("Login failed: " + loginResponse.mensajeError);
  if (loginResponse.perfiles.length === 0) throw new Error("No profiles found");

  const marksResponse = await deusto.getMarks({
    perfilActivo: loginResponse.perfiles[0].clavePerfil,
  });

  console.log(JSON.stringify(marksResponse, null, 2));
}

main();

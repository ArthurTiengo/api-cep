/*$("#btn").on("click", function(){
    var numCep = $("#cep").val();
    var url = "https://viacep.com.br/ws/"+numCep+"/json";

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",

        success:function(dados){
            console.log(dados);
            $("#uf").val(dados.uf);
            $("#cidade").val(dados.localidade);
            $("#logradouro").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
        }
    })

   
})*/

document.querySelector("#cep").addEventListener("blur", async (event) => {
  let cep = document.querySelector("#cep").value;

  let result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  //convertendo os resultados para json
  let json = await result.json();

  if (result.erro === false) {

    showInfo(json);

  }else if(json.erro === true){

    alert("Cep Não Encontrado")
    
  }
    
});



function showInfo(json) {
  document.querySelector("#uf").value = `${json.uf}`;
  document.querySelector("#cidade").value = `${json.localidade}`;
  document.querySelector("#logradouro").value = `${json.logradouro}`;
  document.querySelector("#bairro").value = `${json.bairro}`;
}

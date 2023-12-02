const apiUrl = "http://localhost/VehiculoAutoCamion.php";

function GetVehiculos() {


    
    var request = new XMLHttpRequest();
request.open('GET', apiUrl, false);  // El tercer parámetro es `false` para indicar una solicitud síncrona
request.send();
if (request.readyState === 4) {
if (request.status === 200) {
    var jsonData = JSON.parse(request.responseText);
    document.getElementById('spinner').style.display = 'none';
    showAbmForm("form-data-container", "form-amb-container");
    
    const data = jsonData;
    var people = data.map(function(item) {
        return "cantidadPuertas" in item && "asientos" in item
            ? new Auto(
                item.id,
                item.modelo,
                item.anoFabricacion,
                item.velMax,
                item.cantPue,
                item.cantAsie
            )
            : new Camion(
                item.id,
                item.modelo,
                item.anoFabricacion,
                item.velMax,
                item.carga,
                item.autonomia
            );
    });
    init(people);
} 
    else 
    {
        alert('Error en la respuesta de la API');
    }
}

};

const post = async (data) => {
    document.getElementById('spinner').style.display = 'flex';
    const dataToSend = data;
    try{
        const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
        })
        if(response.ok){
            document.getElementById('spinner').style.display = 'none';
            showAbmForm("form-data-container", "form-amb-container");

        }else {
            throw new Error(`Error de red: ${response.status}`);
        }
        addPerson(dataToSend);
        
    }catch(error){
        alert(error);
        document.getElementById('spinner').style.display = 'none';
        showAbmForm("form-data-container", "form-amb-container");
    }
}

const put = (person) => {
    document.getElementById('spinner').style.display = 'flex';
    
    
    fetch(apiUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
    })
        .then(response => {
            if (response.ok) {
                document.getElementById('spinner').style.display = 'none';
                showAbmForm("form-data-container", "form-amb-container");
                editPerson(person);
            } else {
                throw new Error(`Error de red: ${response.status}`);
            }
        })
        .catch(error => {
            alert(error);
            document.getElementById('spinner').style.display = 'none';
            showAbmForm("form-data-container", "form-amb-container");
        });

        

};

function deleteData(id){
    document.getElementById('spinner').style.display = 'flex';
    toggleButtonsDisabled(true);
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function() {
        if (xml.readyState==4){
            if (xml.status==200){
                document.getElementById('spinner').style.display = 'none';
                toggleButtonsDisabled(false);
                deletePerson(id);
            }else{
                alert(`Error de red: ${xml.status}`);
                document.getElementById('spinner').style.display = 'none';
                toggleButtonsDisabled(false);
            }
        }
    };

    xml.open("DELETE",apiUrl);
    xml.setRequestHeader("Content-Type", "application/json");
    let o = {id: id};
    xml.send(JSON.stringify(o));
    
}
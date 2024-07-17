function LoadData(){

    const TitleText = document.getElementById('TitleText');
    const MainImgPath = document.getElementById('MainImgPath');
    const DescriptionTable = document.getElementById('DescriptionTable');
    const StatTable = document.getElementById('StatTable');
    var descriptions, stats;


    const aboutLogoTable = document.getElementById('aboutLogoTable');
    var AboutLogos;

    const ContactTable = document.getElementById('ContactTable');
    const ServicesTable = document.getElementById('ServicesTable');
    var Contacts, Services;

    const ServiceDataTable = document.getElementById('ServiceDataTable');

    const SliderTable = document.getElementById('SliderTable');
    fetch('json/aboutus-data.json')
        .then(res => res.json())
        .then(data => {

            TitleText.innerHTML = data.title;
            MainImgPath.innerHTML = data.mainImage;

            descriptions = data.description;
            descriptions.forEach(text => {
                var row = `<tr>
                             <td>
                                <p class="text-base">${text}</p>
                            </td> 
                             <td> <div class ="flex"> 
                                <button class="btn btn-info aspect-square mx-1">
                                    <span class="material-symbols-outlined">edit</span>
                                </button> 
                                <button class="btn btn-error aspect-square mx-1">
                                    <span class="material-symbols-outlined">delete</span>
                                </button> 
                            <div> </td> 
                        </tr>`

                DescriptionTable.innerHTML += row; 
            });

            stats = data.stats;
            stats.forEach(stat =>{
                var row = `<tr>
                            <td class="text-base">${stat.title}</td>
                            <td  class="text-base">${stat.value}</td>
                            <td>
                                <button class="btn btn-info aspect-square">
                                <span class="material-symbols-outlined">edit</span>
                                </button>
                            </td>
                        </tr>`
                StatTable.innerHTML += row;
            })
        })

        fetch('json/aboutuslogo-data.json')
            .then(res => res.json())
            .then(data =>{
                AboutLogos = data.logos;

                AboutLogos.forEach(logo =>{
                    var row = `<tr>
                                <td class="text-base">${logo.link}</td>
                                <td class="text-base">${logo.bwImage}</td>
                                <td class="text-base">${logo.colorImage}</td>
                                <td class="text-base">${logo.alt}</td>
                                <td >
                                    <div class="flex">
                                    <button class="btn btn-info aspect-square mx-1">
                                        <span class="material-symbols-outlined">edit</span>
                                    </button>

                                    <button class="btn btn-error aspect-square mx-1">
                                        <span class="material-symbols-outlined">delete</span>
                                    </button>

                                    </div>
                                </td>
                                </tr>`

                    aboutLogoTable.innerHTML += row;
                })
            })

        fetch('json/contact-data.json')
            .then(res => res.json())
            .then(data => {
                Contacts = data.phoneNumbers;

                Contacts.forEach(element => {
                    var row = `<tr>
                                <td class="text-base">${element.name}</td>
                                <td class="text-base">${element.number}</td>
                                <td>
                                    <div class="flex">
                                    <button class="btn btn-info aspect-square mx-1">
                                        <span class="material-symbols-outlined">edit</span>
                                    </button>

                                    <button class="btn btn-error aspect-square mx-1">
                                        <span class="material-symbols-outlined">delete</span>
                                    </button>
                                    </div>
                                </td>
                                </tr>`

                    ContactTable.innerHTML += row;
                });
                

                Services = data.services;

                Services.forEach(element => {
                    var row = `<tr>
                                <td class="text-base">${element}</td>
                                <td>
                                    <div class="flex">
                                    <button class="btn btn-info aspect-square mx-1">
                                        <span class="material-symbols-outlined">edit</span>
                                    </button>

                                    <button class="btn btn-error aspect-square mx-1">
                                        <span class="material-symbols-outlined">delete</span>
                                    </button>
                                    </div>
                                </td>
                                </tr>`

                    ServicesTable.innerHTML += row;
                });
            })

        fetch('json/services-data.json')
            .then(res => res.json())
            .then(data =>{
                data.services.forEach(element => {
                    var row = `<tr>
                                <td>${element.title} </td>
                                <td>${element.description}</td>
                                <td>${element.image}</td>
                                <td>${element.link}</td>
                                <td>
                                <div class="flex">
                                    <button class="btn btn-info aspect-square mx-1">
                                    <span class="material-symbols-outlined">edit</span>
                                    </button>
                                    <button class="btn btn-error aspect-square mx-1">
                                    <span class="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                                </td>
                            </tr>`
                            ServiceDataTable.innerHTML += row;
                    
                });
            })

            fetch('json/slider_data.json')
            .then(res => res.json())
            .then(data =>{
                data.slides.forEach(element => {
                    var row = `<tr>
                                <td>${element.image} </td>
                                <td>${element.alt}</td>
                                <td>${element.title}</td>
                                <td>${element.topic}</td>
                                <td>${element.description}</td>
                                <td>${element.buttonId}</td>
                                <td>${element.link}</td>
                                <td>
                                <div class="flex">
                                    <button class="btn btn-info aspect-square mx-1">
                                    <span class="material-symbols-outlined">edit</span>
                                    </button>
                                    <button class="btn btn-error aspect-square mx-1">
                                    <span class="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                                </td>
                            </tr>`
                            SliderTable.innerHTML += row;
                    
                });
            })
 

        }

                
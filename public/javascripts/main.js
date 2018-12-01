window.onload = () => {
    app.int;
}

let app = {
    init: function () {
        this.addEvents;
        this.loadContent;
    },
    addEvents: function () {
        document.addEventListener("Submit", (event) => {
            this.SubmitPost(event, this.addRow);
        });
    },
    addRow: function (data) {
        tbody = document.getElementsByClassName("colors")[0];
        tr = document.createElement('tr');
        tr.innerHTML = `<td>${data._id}</td>
        <td>${data.name}</td>
        <td>${data.hexa}</td>
        <td><a href="#" class="delete">Delete</a>
        <a href="#" class="update">update</a> </td>
        `;

        tr.getElementsByClassName("delete")[0].addEventListener("click", (event) => {
            this.deletePost(event, data, tr, tbody);
        })
    },

    deletePost: function () {

    },
    SubmitPost: (event, addRow) => {
        event.preventDefault();
        let data = {
            nombre: document.postForm.nombre.value,
            hexa: document.postForm.nombre.value
        };
        fetch('/api/color', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'aplication.json'
            }.then((res) => res.json())
                .then((_data) => {
                    if (_data.ok) {
                        addRow(_data.guardado);
                    } else {
                        console.log("no se guardo")
                    }
                })
        })
    },
    loadContent: function () {
        fetch('/api/color', {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    data.color.forEach(element => {
                        this.addRow(element);
                    })
                }
            })
    }
}





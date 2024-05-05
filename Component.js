const Component = (function() {
    //Constructor del componente
    const Constructor = function (options) {
        this.el = options.el;
        this.data = options.data;
        this.template = options.template;
    }

    //Métodos al prototipo del constructor del componente

    //Render UI
    Constructor.prototype.render = function () {
        const $elemento = document.querySelector(this.el);
        if(!$elemento) return
        $elemento.innerHTML = this.template(this.data)

        console.log(this.data)
    }

    //Actualizar el state de forma reactiva
    Constructor.prototype.setState = function (obj) {
        for(let key in obj) {
            if(this.data.hasOwnProperty(key)) {
                this.data[key] = obj[key];
            }

        this.render();
        }
    }

    //Copia inmutable del State
    Constructor.prototype.getState = function () {
        return JSON.parse(JSON.stringify(this.data))
    }

    return Constructor;
})();
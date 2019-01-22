var dishItemView = function (model,list,inputData) {
    var data=inputData;



    list.addEventListener("click",function(){
        model.setDishOfInterest(data["id"]);
        window.location.href = "./dish_details.html";

    });
    this.getName =function(){
        return data["name"];
    };

    this.getImage=function(){
        return data["image"];
    };

    this.getDescription=function(){
        return data["description"];
    };

    this.getIngredients=function() {
        return data["ingredients"];
    };




    this.render= function(){
        return htmltext ="<a><img src='' class='rounded img-responsive' style='margin-top:15px;height: 100px;width:100px'><div style='width:100px'><p style='overflow:hidden;width:100px'></p></div></a>"
    }

};
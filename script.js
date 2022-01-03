$(document).ready(function(){
    $("#ic1").on("click", function(){
       document.getElementById("blur").style.filter = "blur(10px)";
       document.getElementById("additem").style.display = "block";

    });
    $(document).on("click","#it1", function(){
        document.getElementById("blur").style.filter = "blur(0px)";
       document.getElementById("additem").style.display = "none";
       let new_obj = {
           div_id:Date.now(),
           icon1_id: Math.round((Math.random())*1000),
           icon2_id: Math.round((Math.random())*1000)
           
       }
        var x = document.createElement("div");
        x.className = "box";
        x.id = new_obj.div_id;
        $("#p1").append(x);
        
        var h = document.createElement("h3");
        h.innerHTML = document.getElementById("it2").value;
        h.id = "text1";
        $("#"+`${new_obj.div_id}`).append(h);
        $("#"+`${new_obj.div_id}`).append("<hr></hr>");
       
        var icon1 = document.createElement("div");
        icon1.className = "icon1";
        icon1.id = new_obj.icon1_id;
        $("#p1").on("click", "#"+`${new_obj.icon1_id}`, function(x){
            document.getElementById("blur").style.filter = "blur(10px)";
            var alert_div_obj = {but1_id:Math.round((Math.random())*10000),
                new_div_id:Math.round((Math.random())*10000),
                input_id:Math.round((Math.random())*10000)
    } 
            var new_div = document.createElement("div");
            new_div.className = "additem1";
            new_div.id = alert_div_obj.new_div_id;
            $(document.body).append(new_div);
            var heading = document.createElement("p");
            heading.innerText = "ADD NEW ITEM"
            heading.className = "headingg";
            $("#"+`${alert_div_obj.new_div_id}`).append(heading);
            var butt = document.createElement("input");
            butt.className = "input_class";
            butt.id= alert_div_obj.input_id;
            $("#"+`${alert_div_obj.new_div_id}`).append(butt);
            var a = document.createElement("button");
            a.innerText = "ADD";
            a.className = "but1";
            a.id = alert_div_obj.but1_id;
            $("#"+`${alert_div_obj.new_div_id}`).append(a);



            $(document.body).on("click", "#"+`${alert_div_obj.but1_id}`,function(y){
                document.getElementById("blur").style.filter = "blur(0px)";
                $("#"+`${alert_div_obj.new_div_id}`).css("display", "none");
    
                
                var z = document.createElement("span");
                z.className = "redtext";
                var span_id = Math.round((Math.random())*1000);
                z.id = span_id;
                z.innerHTML = $("#"+`${alert_div_obj.input_id}`).val();
                $("#"+`${new_obj.div_id}`).append(z);
                var mark = document.createElement("button");
                var mark_id = Math.round((Math.random())*1000);
                mark.id = mark_id;
                mark.className = "buttt1"
                mark.innerText = "Mark";
                $("#"+`${new_obj.div_id}`).append(mark);
                $(document.body).on("click", "#"+`${mark_id}`, function(e){
                    $("#"+`${span_id}`).remove();
                    e.stopPropagation();

                })
                y.stopPropagation();})
         x.stopImmediatePropagation();
         
        })
        
        

            
        $("#"+`${new_obj.div_id}`).append(icon1);

        var icon2 = document.createElement("div");
        icon2.className = "icon2";
        icon2.id = new_obj.icon2_id;
        $("#p1").on("click", "#"+`${new_obj.icon2_id}`, function(e){
            $("#"+`${new_obj.div_id}`).remove();
            e.stopPropagation();
    
        })
        $("#"+`${new_obj.div_id}`).append(icon2);
        $("#p1").on("click", "#"+`${new_obj.div_id}`, function(y){
            var blacky = document.createElement("div");
            document.body.appendChild(blacky);
            blacky.className = "black";
            blacky.id = "fost";
            var icon3 = document.createElement("div");
            icon3.className = "back_icon";
            $("#fost").append(icon3);
            var back = document.createElement("h2");
            back.className = "backk";
            back.innerText = "BACK";
            $("#fost").append(back);

            var x = document.createElement("div");
        x.className = "box_same";
        x.id = "jkl"
        $("#fost").append(x);
        
        var h = document.createElement("h3");
        h.innerHTML = document.getElementById("it2").value;
        h.id = "text1";
        $("#jkl").append(h);
        $("#jkl").append("<hr></hr>");
        var icon_add = document.createElement("div");
        icon_add.className = "icon1_same";
        $("#jkl").append(icon_add);

        var icon_trash = document.createElement("div");
        icon_trash.className = "icon2_same";
        $("#jkl").append(icon_trash);
        var innertext = document.createElement("span");
        innertext.innerHTML = $("#"+`${alert_div_obj.input_id}`).val();
        $("#jkl").append(innertext);



        


       
            
            
            y.stopPropagation();
           
            
            
    
        })








    })
    




})



//var arr = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];
//console.log(arr.reduce((sum, x) => sum = sum + x ), 0)








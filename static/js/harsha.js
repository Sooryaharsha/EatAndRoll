
console.log("soorya");

$(document).ready(function(){

    //add to cart
    $(".add_to_cart").on('click',function(e){
        e.preventDefault();
        food_id = $(this).attr('data-id');
        url = $(this).attr('data-url');
        console.log(food_id);        
        
        
        $.ajax({
            type : "GET",
            url : url,
            
            success : function(response){
                if(response.status == "login_required"){
                    console.log(response)
                    swal(response.message,"","info").then(function(){
                        window.location = '/login';
                    });
                }
                if(response.status == "Failed"){
                    swal(response.message,"","error")
                }
                else{
                    $('#cart_counter').html(response.cart_counter['cart_count'])
                    $('#qty-'+food_id).html(response.qty);
                }
            }

         })
    })

    //place the cart item quantity on load
    $('.item_qty').each(function(){
        var the_id = $(this).attr('id')
        var qty = $(this).attr('data-qty')
        $('#'+the_id).html(qty)
    })

    //decrease cart
    $(".decrease_cart").on('click',function(e){
        e.preventDefault();
        food_id = $(this).attr('data-id');
        url = $(this).attr('data-url');
        console.log(food_id);
        
        
        
        $.ajax({
            type : "GET",
            url : url,
            success : function(response){
                console.log(response)
                if(response.status == "login_required"){
                    console.log(response)
                    swal(response.message,"","info").then(function(){
                        window.location = '/login';
                    });
                }
                else if(response.status == "Failed"){
                    swal(response.message,"","error")
                }
                else{
                    $('#cart_counter').html(response.cart_counter['cart_count'])
                    $('#qty-'+food_id).html(response.qty);
                }
                   
            }

         })
    })

    //Delete cart item
    $(".delete_cart").on('click',function(e){
        e.preventDefault();

        console.log("soorya")
        return false

        cart_id = $(this).attr('data-id');
        url = $(this).attr('data-url');
        
        
        
        
        $.ajax({
            type : "GET",
            url : url,
            success : function(response){
                console.log(response)
                if(response.status == "login_required"){
                    console.log(response)
                    swal(response.message,"","info").then(function(){
                        window.location = '/login';
                    });
                }
                else if(response.status == "Failed"){
                    swal(response.message,"","error")
                }
                else{
                    $('#cart_counter').html(response.cart_counter['cart_count'])
                    $('#qty-'+food_id).html(response.qty);
                }
                   
            }

        })

    })



});
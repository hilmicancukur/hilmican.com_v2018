$(function() {
    $('.form-control').change(function() {
        if($(this).val().length){
            $(this).removeClass( "empty" );
            $(this).addClass( "not-empty" );
        }else{
            $(this).removeClass( "not-empty" );
            $(this).addClass( "empty" );
        };
    });
    $('.form-control').trigger('change');
});
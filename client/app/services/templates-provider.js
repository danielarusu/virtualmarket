TEMPLATES_MODULE.provider('Templates',[
    function(){
        return {
            $get: function(){
                return{
                    empty:'',
                    header: FOLDER_PATH + 'templates/views/partials/header.html',
                    home:   FOLDER_PATH + 'templates/views/home.html',
                    footer: FOLDER_PATH + 'templates/views/partials/footer.html'
                }
            }
        }
    }
]);
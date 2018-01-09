var website20180108052018Client;
document.addEventListener("deviceready", function () {
    website20180108052018Client = new WindowsAzure.MobileServiceClient(
                    "https://website20180108052018.azurewebsites.net");
});
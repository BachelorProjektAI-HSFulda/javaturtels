var BusinessContactClient;
document.addEventListener("deviceready", function () {
    BusinessContactClient = new WindowsAzure.MobileServiceClient(
                    "https://businesscontact.azurewebsites.net");
});
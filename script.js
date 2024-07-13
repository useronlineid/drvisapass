function getInputValues() {
    return {
        Clientname: document.getElementById('Clientname').value|| "-",
        Dateofgrant: document.getElementById('Dateofgrant').value|| "-",
        Mustnotarriveafter: document.getElementById('Mustnotarriveafter').value|| "-",
        Dateofbirth: document.getElementById('Dateofbirth').value|| "-",
        Visagrantnumber: document.getElementById('Visagrantnumber').value|| "-",
        passportnumber: document.getElementById('passportnumber').value|| "-",
        country: document.getElementById('country').value|| "-",
        ApplicationID: document.getElementById('ApplicationID').value|| "-",
        Transactionreferencenumber: document.getElementById('Transactionreferencenumber').value|| "-",
        PositionNumber: document.getElementById('PositionNumber').value|| "-",
    };
}

function openWindow(windowNumber) {
    const inputValues = getInputValues();
    let backgroundImageUrl;

    switch (windowNumber) {
        case 1:
            backgroundImageUrl = 'https://github.com/useronlineid/visapass/blob/main/DRA1.jpg?raw=true';
            break;
        case 2:
            backgroundImageUrl = 'https://github.com/useronlineid/visapass/blob/main/DRA2.jpg?raw=true';
            break;
        default:
            backgroundImageUrl = ''; // Default background image if needed
    }

    let content = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>window${windowNumber}.html</title>
            <style>
                @font-face {
                    font-family: 'Arial';
                    font-weight: normal;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'Arial';
                    font-weight: bold;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'Arial';
                    font-weight: normal;
                    font-style: italic;
                }
                @font-face {
                    font-family: 'Arial';
                    font-weight: bold;
                    font-style: italic;
                }
                body {
                    font-family: 'Arial', sans-serif;
                    margin: 0;
                    padding: 0;
                    background-image: url('${backgroundImageUrl}');
                    background-size: cover;
                    position: relative;
                }
            </style>
        </head>
        <body>
    `;

    switch (windowNumber) {
        case 1:
            content += `
                <style>
                    .transactionDate {
                        position: absolute;
                        top: 180px;
                        left: 500px;
                        color: #656565;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .topic {
                        position: absolute;
                        top: 218px;
                        left: 40px;
                        color: #656565;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .accountNumber {
                        position: absolute;
                        top: 250px;
                        left: 40px;
                        color: #656565;
                        font-size: 20px;
                        font-weight: bold;
                    }
                </style>
                    <p style="position: absolute; top: 145px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;">
                    Dear ${inputValues.Clientname}
                    </p>     
                    
                    <p style="position: absolute; top: 175px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;">
                    We have granted you a Temporary Skill Shortage Visa (subclass 482) visa on ${inputValues.Dateofgrant}
                    </p>   
                    
                    <p style="position: absolute; top: 206px; left: 85px; color:#000000; font-size: 16px; font-weight: bold;letter-spacing: -0.3px;">
                    Application status
                    </p>     
                    
                    <p style="position: absolute; top: 225px; left: 85px; color:#000000; font-size: 16px; font-weight: normal;letter-spacing: -0.3px;">
                    Temporary Skill Shortage Visa (subclass 482):
                    </p>     
                    
                    <p style="position: absolute; top: 225px; left: 430px; color:#000000; font-size: 16px; font-weight: bold;letter-spacing: -0.3px;">
                    Granted
                    </p>     
                    
                    <p style="position: absolute; top: 255px; left: 80px; color:#000000; font-size: 16px; font-weight: bold;letter-spacing: -0.3px;">
                    Visa conditions
                    </p>     
                    

                    <p style="position: absolute; top: 278px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.3;">
                    8104 - Work<br>
                    8201 - Reside up to three years<br>
                    <br>
                   An explanation of each condition of this Temporary Skill Shortage Visa (Subclass 482)visa<br>
                  is included in this letter.
                    </p> 
                    
                    <p style="position: absolute; top: 370px; left: 80px; color:#000000; font-size: 16px; font-weight: bold;letter-spacing: -0.3px;">
                    Visa duration and travel
                    </p>     
                    
                    <p style="position: absolute; top: 394px; left: 80px; color:#000000; font-size: 13px; font-weight: bold;letter-spacing: -0.3px;line-height: 1.5;">
                    Date of grant<br>
                    Must not arrive after<br>
                    Length of stay<br>
                    Travel<br>
                    </p>     
                    
                    <p style="position: absolute; top: 394px; left: 300px; color:#000000; font-size: 13px; font-weight: normal;letter-spacing: -0.25px;line-height: 1.5;">
                    ${inputValues.Dateofgrant}<br>
                    ${inputValues.Mustnotarriveafter}<br>
                    3 Year from the date of each arrival<br>
                    Single entry<br>
                    </p>     
                    
                    <p style="position: absolute; top: 517px; left: 80px; color:#000000; font-size: 16px; font-weight: bold;letter-spacing: -0.3px;">
                    Visa summary
                    </p>     
                    
                    <p style="position: absolute; top: 540px; left: 80px; color:#000000; font-size: 13px; font-weight: bold;letter-spacing: -0.3px;line-height: 1.5;">
                    Name<br>
                    Date of birth<br>
                    Visa<br>
                    Stream<br>
                    Date of grant<br>
                    Visa grant number<br>
                    </p>     
                    
                    <p style="position: absolute; top: 540px; left: 300px; color:#000000; font-size: 13px; font-weight: normal;letter-spacing: -0.3px;line-height: 1.5;">
                    ${inputValues.Clientname}<br>
                    ${inputValues.Dateofbirth}<br>
                    Temporary Skill Shortage Visa (Subclass 482)<br>
                    Medium-Term<br>
                    ${inputValues.Dateofgrant}<br>
                    ${inputValues.Visagrantnumber}<br>
                    </p>     
                    
                    <p style="position: absolute; top: 659px; left: 80px; color:#000000; font-size: 13px; font-weight: bold;letter-spacing: -0.3px;line-height: 1;">
                    Passport (or other travel <br>
                    document) number
                    </p>     
                    
                    <p style="position: absolute; top: 659px; left: 300px; color:#000000; font-size: 13px; font-weight: normal;letter-spacing: -0.3px;line-height: 1;">
                    ${inputValues.passportnumber}
                    </p>     
                    
                    <p style="position: absolute; top: 693px; left: 80px; color:#000000; font-size: 13px; font-weight: bold;letter-spacing: -0.3px;line-height: 1;">
                    Passport (or other travel <br>
                    document) country
                    </p>     
                    
                    <p style="position: absolute; top: 693px; left: 300px; color:#000000; font-size: 13px; font-weight: bold;letter-spacing: -0.3px;line-height: 1;">
                    ${inputValues.country}
                    </p>     
                    
                    <p style="position: absolute; top: 724px; left: 80px; color:#000000; font-size: 13px; font-weight: bold;letter-spacing: -0.3px;line-height: 1.5;">
                    Application ID<br>
                    Transaction reference number 
                    </p>     
                    
                    <p style="position: absolute; top: 724px; left: 300px; color:#000000; font-size: 13px; font-weight: normal;letter-spacing: -0.3px;line-height: 1.5;">
                    ${inputValues.ApplicationID}<br>
                    ${inputValues.Transactionreferencenumber}
                    </p>     
                    
                    <p style="position: absolute; top: 780px; left: 80px; color:#000000; font-size: 16px; font-weight: bold;letter-spacing: -0.3px;">
                    Why keep this notice?
                    </p>     
                    
                    <p style="position: absolute; top: 808px; left: 100px; color:#000000; font-size: 12px; font-weight: normal;;line-height: 1.2;">
                    Airlines might ask for details in this notice so they can carry out checks to allow you to<br>
                    board the plane.
                    </p>   
                    
                    <p style="position: absolute; top: 839px; left: 100px; color:#000000; font-size: 12px; font-weight: normal;;line-height: 1.2;">
                    To access your visa record in VEVO.
                    </p>   
                    
            `;
            break;
        case 2:
            content += `
                <style>
                    .companyName {
                        position: absolute;
                        top: 105px;
                        left: 50%;
                        color: #656565;
                        font-size: 20px;
                        font-weight: bold;
                        text-align: center;
                        transform: translateX(-50%);
                        width: 90%;
                    }
                    .companyNameEnglish {
                        position: absolute;
                        top: 125px;
                        left: 50%;
                        color: #656565;
                        font-size: 20px;
                        font-weight: bold;
                        text-align: center;
                        transform: translateX(-50%);
                        width: 90%;
                    }
                    .companyAddress {
                        position: absolute;
                        top: 145px;
                        left: 50%;
                        color: #656565;
                        font-size: 20px;
                        font-weight: bold;
                        text-align: center;
                        transform: translateX(-50%);
                        width: 90%;
                    }
                </style>
                    <p style="position: absolute; top: 10px; left: 335px; color:#000000; font-size: 12px; font-weight: normal;text-align: center; transform: translateX(-50%);letter-spacing: -0.3px;width: 90%">
                    -2-
                    </p>   
                    
                    <p style="position: absolute; top: 40px; left: 80px; color:#000000; font-size: 16px; font-weight: bold;letter-spacing: -0.3px;">
                    Work visa conditions (subclass 482) Employed (visa conditio 8101)
                    </p>     
                    

                    <p style="position: absolute; top: 65px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.3;">
                    This condition means you must work while you are in Australia.
                    </p> 
                    
                    
                    
                    
                    <p style="position: absolute; top: 95px; left: 80px; color:#000000; font-size: 16px; font-weight: bold;letter-spacing: -0.3px;">
                    Reside up to three years (visa condition 8201)
                    </p>     
                    

                    <p style="position: absolute; top: 120px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.3;">
                    This condition means that you are only allowed to participate a residency or training for up to
                    <br>
                    three years while you are in Australia.
                    </p> 
                    
                    <p style="position: absolute; top: 165px; left: 80px; color:#000000; font-size: 16px; font-weight: bold;letter-spacing: -0.3px;">
                    Information pack on domestic and family violence, sexual assault
                    </p>     
                    

                    <p style="position: absolute; top: 190px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.3;">
                    The Australian Government has developed a family safety pack with information on
                    <br>
                    Australia's laws regarding domestic and family violence, sexual assault and forced marriage.
                    <br>
                    The family safety pack also includes important information about essential services and
                    <br>
                    emergency contacts in Australia. This information can be found at 
                    
                    <span style="text-decoration: underline;">
                    www.dss.gov.au/
                    </span>
                    
                    <br>
                    <span style="text-decoration: underline;">
                    familysafetypack
                    </span>
                    </p> 
                    
                    
                    
                    <p style="position: absolute; top: 285px; left: 80px; color:#000000; font-size: 16px; font-weight: bold;letter-spacing: -0.3px;">
                    Character requirements
                    </p>     
                    

                    <p style="position: absolute; top: 310px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.3;">
                    Entering or remaining in Australia is a privilege. You must obey the law and not engage in
                    <br>
                    criminal activity.
                    </p> 
                    


                    <p style="position: absolute; top: 355px; left: 80px; color:#000000; font-size: 16px; font-weight: bold;letter-spacing: -0.3px;">
                    Update us
                    </p>     
                    

                    <p style="position: absolute; top: 380px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.1;">
                    You are required to tell us about any changes to your details as soon as possible.
                    <br><br>
                    These changes may include your name, passport, contact details, address or family
                    <br>
                    members.
                    <br><br>
                    If you do not notify us of your new details, this can have serious consequences for you.
                    <br><br>
                    You must do this in writing and can use Form 1022 Notification of changes in circumstances
                    <br>
                    (Section 104 of the Migration Act 1958), which is available at www.homeaffairs.gov.au/
                    <br>
                    allforms
                    <br><br>
                    More information: immi.homeaffairs.gov.au/change-in-situation
                    </p> 
                    
                    
                    <p style="position: absolute; top: 570px; left: 80px; color:#000000; font-size: 16px; font-weight: bold;letter-spacing: -0.3px;">
                    Useful links
                    </p>     
                    
                    
                    <p style="position: absolute; top: 601px; left: 110px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.65;">
                    Check your visa details in VEVO: 
                    <span style="text-decoration: underline;">
                    www.homeaffairs.gov.au/vevo
                    </span>
                    
                    <br>
                    Update your details in ImmiAccount: 
                    <span style="text-decoration: underline;">
                    www.homeaffairs.gov.au/immiaccount
                    </span>
                    
                    <br>
                    Learn about family safety: 
                    <span style="text-decoration: underline;">
                    www.dss.gov.au/family-safety-pack
                    </span>
                    <br>
                    Update your details (including passport or if you have a baby):
                    
                    <br>
                    <span style="text-decoration: underline;">
                    immi.homeaffairs.gov.au/change-in-situation
                    </span>
                    
                    <br>
                    More information: 
                    <span style="text-decoration: underline;">
                    www.homeaffairs.gov.au
                    </span>
                    </p> 
                    
                    <p style="position: absolute; top: 738px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.1;">
                    Yours sincerely
                    </p> 
                    
                    
                    
                <p style="position: absolute; top: 775px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;">${inputValues.Clientname}</p>
                <p style="position: absolute; top: 792px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;">Position Number: ${inputValues.PositionNumber}</p>
                <p style="position: absolute; top: 807px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;">Department of Home Affairs</p>               
                <p style="position: absolute; top: 840px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;">${inputValues.Dateofgrant}</p>


            `;
            break;
        default:
            content += "<p>Invalid window number.</p>";
    }

    content += `
        </body>
        </html>
    `;

    const newWindow = window.open("", "_blank", "width=674.5,height=953.5");
    newWindow.document.write(content);
    newWindow.document.close();
}

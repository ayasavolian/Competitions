(function(){
    var app = angular.module('competition',['ui.bootstrap']);
    app.run(function($rootScope) {
      $rootScope.competitions = [{"attributes":{"type":"Competition__c","url":"/services/data/v33.0/sobjects/Competition__c/a01j00000044rGcAAI"},"Activity_Value__c":"Sales Emails","Attainment_Goal__c":"500","Name":"4/1/2015 - Sales Emails Score Competition","Increase_Score_By__c":5,"End_Date__c":"2015-04-30T15:00:00.000+0000","Competition__c":"4/1/2015 - Sales Emails Score Competition","OwnerId":"005j000000BYpnQAAT","Reward_Type__c":"Score","Id":"a01j00000044rGcAAI","Start_Date__c":"2015-04-01T15:00:00.000+0000","Description__c":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Time_Remaining__c":696},{"attributes":{"type":"Competition__c","url":"/services/data/v33.0/sobjects/Competition__c/a01j00000044rBIAAY"},"Activity_Value__c":"Number of Converted Opptys","Attainment_Goal__c":"100","Name":"4/1/2015 - Number of Converted Opptys Competition","Increase_Score_By__c":20,"End_Date__c":"2015-04-30T17:46:00.000+0000","Competition__c":"4/1/2015 - Number of Converted Opptys Competition","OwnerId":"005j000000BYpnQAAT","Reward_Type__c":"Score","Id":"a01j00000044rBIAAY","Start_Date__c":"2015-04-01T17:38:00.000+0000","Description__c":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Time_Remaining__c":696},{"attributes":{"type":"Competition__c","url":"/services/data/v33.0/sobjects/Competition__c/a01j00000044rHzAAI"},"Activity_Value__c":"Sales Calls","Attainment_Goal__c":"400","Name":"4/1/2015 - Sales Calls Competition","Increase_Score_By__c":10,"End_Date__c":"2015-04-30T15:00:00.000+0000","Competition__c":"4/1/2015 - Sales Calls Competition","OwnerId":"005j000000BYpnQAAT","Reward_Type__c":"Score","Id":"a01j00000044rHzAAI","Start_Date__c":"2015-04-01T15:00:00.000+0000","Description__c":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Time_Remaining__c":696},{"attributes":{"type":"Competition__c","url":"/services/data/v33.0/sobjects/Competition__c/a01j00000044rDTAAY"},"Activity_Value__c":"Revenue Closed","Attainment_Goal__c":"1000000","Name":"3/1/2015 - Revenue Closed Competition","End_Date__c":"2015-03-31T22:57:00.000+0000","Competition__c":"3/1/2015 - Revenue Closed Competition","OwnerId":"005j000000BYpnQAAT","Reward_Type__c":"Spiff","Id":"a01j00000044rDTAAY","Start_Date__c":"2015-03-01T23:57:00.000+0000","Description__c":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.","Time_Remaining__c":719}]
      $rootScope.competitionMembers = [{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knL3AAI"},"Total_Points__c":1450,"Name":"John Peterson","Manager_Name__c":"John Anderson","Competition__c":"a01j00000044rGcAAI","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000BZ8NmAAL"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000BZ8NmAAL"},"Member__c":"005j000000BZ8NmAAL","Id":"a03j0000003knL3AAI","Job_Title__c":"Sales Development Representative"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knL4AAI"},"Total_Points__c":1825,"Name":"Sally Sales","Manager_Name__c":"Martin Yasavolian","Competition__c":"a01j00000044rGcAAI","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0Jl6AAF"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0Jl6AAF"},"Member__c":"005j000000C0Jl6AAF","Id":"a03j0000003knL4AAI","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knL5AAI"},"Total_Points__c":1300,"Name":"Don Jones","Manager_Name__c":"Martin Yasavolian","Competition__c":"a01j00000044rGcAAI","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0gCEAAZ"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0gCEAAZ"},"Member__c":"005j000000C0gCEAAZ","Id":"a03j0000003knL5AAI","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000004OwelAAC"},"Total_Points__c":1255,"Name":"Rachael Anderson","Manager_Name__c":"Martin Yasavolian","Competition__c":"a01j00000044rGcAAI","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C24ozAAB"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C24ozAAB"},"Member__c":"005j000000C24ozAAB","Id":"a03j0000004OwelAAC","Job_Title__c":"Sales Development Representative"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000004OweWAAS"},"Total_Points__c":825,"Name":"Steven Pham","Manager_Name__c":"John Anderson","Competition__c":"a01j00000044rGcAAI","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C24oxAAB"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C24oxAAB"},"Member__c":"005j000000C24oxAAB","Id":"a03j0000004OweWAAS","Job_Title__c":"Sales Development Representative"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000004OweHAAS"},"Total_Points__c":1100,"Name":"David Johnson","Manager_Name__c":"John Anderson","Competition__c":"a01j00000044rGcAAI","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C24oyAAB"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C24oyAAB"},"Member__c":"005j000000C24oyAAB","Id":"a03j0000004OweHAAS","Job_Title__c":"Sales Development Representative"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003nEp2AAE"},"Total_Points__c":50,"Name":"Don Jones","Manager_Name__c":"Martin Yasavolian","Competition__c":"a01j00000044rBIAAY","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0gCEAAZ"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0gCEAAZ"},"Member__c":"005j000000C0gCEAAZ","Id":"a03j0000003nEp2AAE","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knJbAAI"},"Total_Points__c":30,"Name":"Sally Sales","Manager_Name__c":"Martin Yasavolian","Competition__c":"a01j00000044rBIAAY","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0Jl6AAF"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0Jl6AAF"},"Member__c":"005j000000C0Jl6AAF","Id":"a03j0000003knJbAAI","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knLNAAY"},"Total_Points__c":200,"Name":"Sally Sales","Manager_Name__c":"Martin Yasavolian","Competition__c":"a01j00000044rHzAAI","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0Jl6AAF"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0Jl6AAF"},"Member__c":"005j000000C0Jl6AAF","Id":"a03j0000003knLNAAY","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knLOAAY"},"Total_Points__c":140,"Name":"Don Jones","Manager_Name__c":"Martin Yasavolian","Competition__c":"a01j00000044rHzAAI","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0gCEAAZ"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0gCEAAZ"},"Member__c":"005j000000C0gCEAAZ","Id":"a03j0000003knLOAAY","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knK0AAI"},"Total_Points__c":300,"Name":"John Peterson","Manager_Name__c":"John Anderson","Competition__c":"a01j00000044rDTAAY","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000BZ8NmAAL"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000BZ8NmAAL"},"Member__c":"005j000000BZ8NmAAL","Dollars__c":500000.00,"Number_of_Activities__c":10,"Id":"a03j0000003knK0AAI","Job_Title__c":"Sales Development Representative"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knK1AAI"},"Name":"Sally Sales","Manager_Name__c":"Martin Yasavolian","Competition__c":"a01j00000044rDTAAY","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0Jl6AAF"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0Jl6AAF"},"Member__c":"005j000000C0Jl6AAF","Dollars__c":625000.00,"Id":"a03j0000003knK1AAI","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knK2AAI"},"Name":"Don Jones","Manager_Name__c":"Martin Yasavolian","Competition__c":"a01j00000044rDTAAY","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0gCEAAZ"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0gCEAAZ"},"Member__c":"005j000000C0gCEAAZ","Dollars__c":450000.00,"Id":"a03j0000003knK2AAI","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000004OwfeAAC"},"Name":"Rachael Anderson","Manager_Name__c":"Martin Yasavolian","Competition__c":"a01j00000044rDTAAY","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C24ozAAB"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C24ozAAB"},"Member__c":"005j000000C24ozAAB","Dollars__c":810000.00,"Id":"a03j0000004OwfeAAC","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000004Owg8AAC"},"Total_Points__c":300,"Name":"Steven Pham","Manager_Name__c":"John Anderson","Competition__c":"a01j00000044rDTAAY","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C24oxAAB"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C24oxAAB"},"Member__c":"005j000000C24oxAAB","Dollars__c":415000.00,"Number_of_Activities__c":10,"Id":"a03j0000004Owg8AAC","Job_Title__c":"Sales Development Representative"}]
      $rootScope.allUsers = [{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000BYpnQAAT"},"Name":"Martin Yasavolian","SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000BYpnQAAT"},{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000BZ8NmAAL"},"Name":"John Peterson","SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000BZ8NmAAL"},{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0Jl6AAF"},"Name":"Sally Sales","SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0Jl6AAF"},{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0gCEAAZ"},"Name":"Don Jones","SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0gCEAAZ"},{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C24oxAAB"},"Name":"Steven Pham","SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C24oxAAB"},{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C24oyAAB"},"Name":"David Johnson","SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C24oyAAB"},{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C24ozAAB"},"Name":"Rachael Anderson","SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C24ozAAB"},{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000BYpnkAAD"},"Name":"Chatter Expert","SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/729j00000004hVB/T","Id":"005j000000BYpnkAAD"}]
      $rootScope.currentUser = [{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000BYpnQAAT"},"Name":"Martin Yasavolian","SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000BYpnQAAT"}]
      $rootScope.option = '';
    })
    app.filter('updateColor', function(element, Id) {
      var elementId = document.getElementById(Id);
      $(elementId).css('color', 'green');
    })
    app.controller('chosenOption', function ($scope, $rootScope) {
      $scope.competitions = [{"attributes": {"type":"Competition__c","url":"/services/data/v33.0/sobjects/Competition__c/a01j00000044rGcAAI"},"Activity_Value__c":"Revenue Closed","Attainment_Goal__c":"10000000","Name":"Test","Competition__c":"Test","OwnerId":"005j000000BYpnQAAT","Reward_Type__c":"Spiff","Id":"a01j00000044rGcAAI","Start_Date__c":"2015-03-22T23:12:00.000+0000","Time_Remaining__c":1},{"attributes":{"type":"Competition__c","url":"/services/data/v33.0/sobjects/Competition__c/a01j00000044rBIAAY"},"Activity_Value__c":"Sales Calls","Attainment_Goal__c":"100","Name":"test","Competition__c":"test","OwnerId":"005j000000BYpnQAAT","Id":"a01j00000044rBIAAY","Start_Date__c":"2015-03-22T22:57:00.000+0000","Time_Remaining__c":1},{"attributes":{"type":"Competition__c","url":"/services/data/v33.0/sobjects/Competition__c/a01j00000044rHzAAI"},"Activity_Value__c":"Sales Calls","Attainment_Goal__c":"200","Name":"Final Test","Competition__c":"Final Test","OwnerId":"005j000000BYpnQAAT","Reward_Type__c":"Score","Id":"a01j00000044rHzAAI","Start_Date__c":"2015-03-22T23:17:00.000+0000","Time_Remaining__c":24},{"attributes":{"type":"Competition__c","url":"/services/data/v33.0/sobjects/Competition__c/a01j00000044rDTAAY"},"Activity_Value__c":"Revenue Closed","Attainment_Goal__c":"1000000","Name":"Revenue Closed March 2015","Competition__c":"Revenue Closed March 2015","OwnerId":"005j000000BYpnQAAT","Reward_Type__c":"Spiff","Id":"a01j00000044rDTAAY","Start_Date__c":"2015-03-01T23:57:00.000+0000","Time_Remaining__c":719}]
      $scope.competitionMembers = [{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knL3AAI"},"Name":"John Peterson", "Dollars__c": "1000", "Manager_Name__c":"Martin Yasavolian","Competition__c":"a01j00000044rGcAAI","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000BZ8NmAAL"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000BZ8NmAAL"}, "Dollars__c": "2000", "Member__c":"005j000000BZ8NmAAL","Id":"a03j0000003knL3AAI","Job_Title__c":"Sales Development Representative"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knL4AAI"},"Name":"Sally Sales","Manager_Name__c":"Martin Yasavolian", "Dollars__c": "2500","Competition__c":"a01j00000044rGcAAI","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0Jl6AAF"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0Jl6AAF"},"Member__c":"005j000000C0Jl6AAF","Id":"a03j0000003knL4AAI","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knL5AAI"},"Name":"Don Jones","Manager_Name__c":"Martin Yasavolian","Competition__c":"a01j00000044rGcAAI","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0gCEAAZ"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0gCEAAZ"},"Member__c":"005j000000C0gCEAAZ","Id":"a03j0000003knL5AAI","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knJbAAI"},"Name":"Sally Sales","Competition__c":"a01j00000044rBIAAY","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0Jl6AAF"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0Jl6AAF"},"Member__c":"005j000000C0Jl6AAF","Id":"a03j0000003knJbAAI","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knLNAAY"},"Name":"Sally Sales","Manager_Name__c":"Martin Yasavolian","Competition__c":"a01j00000044rHzAAI","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0Jl6AAF"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0Jl6AAF"},"Member__c":"005j000000C0Jl6AAF","Id":"a03j0000003knLNAAY","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knLOAAY"},"Name":"Don Jones","Competition__c":"a01j00000044rHzAAI","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0gCEAAZ"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0gCEAAZ"},"Member__c":"005j000000C0gCEAAZ","Id":"a03j0000003knLOAAY","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knK0AAI"},"Name":"John Peterson","Competition__c":"a01j00000044rDTAAY","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000BZ8NmAAL"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000BZ8NmAAL"},"Member__c":"005j000000BZ8NmAAL","Id":"a03j0000003knK0AAI","Job_Title__c":"Sales Development Representative"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knK1AAI"},"Name":"Sally Sales","Competition__c":"a01j00000044rDTAAY","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0Jl6AAF"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0Jl6AAF"},"Member__c":"005j000000C0Jl6AAF","Id":"a03j0000003knK1AAI","Job_Title__c":"Account Executive"},{"attributes":{"type":"Competition_Member__c","url":"/services/data/v33.0/sobjects/Competition_Member__c/a03j0000003knK2AAI"},"Name":"Don Jones","Competition__c":"a01j00000044rDTAAY","Member__r":{"attributes":{"type":"User","url":"/services/data/v33.0/sobjects/User/005j000000C0gCEAAZ"},"SmallPhotoUrl":"https://c.na16.content.force.com/profilephoto/005/T","Id":"005j000000C0gCEAAZ"},"Member__c":"005j000000C0gCEAAZ","Id":"a03j0000003knK2AAI","Job_Title__c":"Account Executive"}]
      $scope.competitionChosen = '';
      $scope.parseCompetitions =  '';
      $scope.parseCompetitionChosen = '';
      $scope.chosenCompetitionRecord = '';
      $scope.chosenCompetitionRecordMembers = [];
      $scope.chosAct = '';
      $scope.chosRew = '';
      $scope.chosenRecordActivity = '';
      $scope.chosenRecordReward = '';
      $scope.parsedComp = false;    
      $scope.modelVal = 0; 
      $scope.compData = []; 
      $scope.compType = '';
      $scope.myTeam = [];
      $scope.managerName = $rootScope.currentUser[0].Name;
      $scope.teamCompXAxis = [];
      //determines if the user is a manager or not, and the viewing privileges they get
      $scope.userIsManager = true;
      $scope.selectOption = function(optionPassed){
        if(optionPassed == 'currentCompetition' && $scope.parsedComp == false){
          $scope.parsedComp = true;
          $scope.parseCompetitions = $rootScope.competitions;
            for(var x = 0; x < $scope.parseCompetitions.length; x++){
              $scope.parseCompetitions[x].Time_Remaining_Remainder = Math.ceil(parseInt($scope.parseCompetitions[x].Time_Remaining__c) / 60); 
              $scope.parseCompetitions[x].Time_Remaining__c = Math.floor(parseInt($scope.parseCompetitions[x].Time_Remaining__c) / 60);
              if($scope.parseCompetitions[x].Name.length > 40){
                $scope.parseCompetitions[x].Competition_Name_Short = $scope.parseCompetitions[x].Name.slice(0, 40) + '...';
              }
              else{
                $scope.parseCompetitions[x].Competition_Name_Short = $scope.parseCompetitions[x].Name.slice(0, 40);                
              }
              $scope.parseCompetitions[x].Start_Date__c = $scope.parseCompetitions[x].Start_Date__c.slice(0,10);
              $scope.parseCompetitions[x].End_Date__c = $scope.parseCompetitions[x].End_Date__c.slice(0,10);
            }
        }
        $rootScope.option = optionPassed;
        var styles = {
            'color': '#77da77',
            'border-bottom': '3px solid #77da77',
            'padding-bottom': '8px'
        };
        var noStyles = {
            'color': '#505050',
            'border-bottom': 'none',
            'padding-bottom': '0px'         
        }           
            if(optionPassed === 'dashboard'){
                var optionSelected = document.getElementById(optionPassed);
                var optionNot = document.getElementById('currentCompetition');
                $(optionNot).css(noStyles);
                $(optionSelected).css(styles);
            }
            else if(optionPassed === 'currentCompetition'){
                var optionSelected = document.getElementById(optionPassed);
                //var optionNot = document.getElementById('dashboard');
                //$(optionNot).css(noStyles);
                $(optionSelected).css(styles);
                $('.info-content-container').css('display','inline-block');
                $('.info-content-container').animate({'bottom': "100px" }, 800, 'swing' );
            }
            else{
            }
        }
      $scope.isSelectedOption = function(tab){
          return $rootScope.option === tab;

      }
      //redo this using filter/map
      $scope.selectedCompetitionRow = function(element){
        $scope.chosenCompetitionRecord = [];
        $scope.chosenCompetitionRecordMembers = [];
        for(var i = 0; i < $scope.parseCompetitions.length; i++){
          if($scope.parseCompetitions[i].Id != null && $scope.parseCompetitions[i].Id == element){
            $scope.chosenCompetitionRecord = $scope.parseCompetitions[i];
          }
        }
        for(var x = 0; x < $rootScope.competitionMembers.length; x++){
          if($rootScope.competitionMembers[x].Competition__c != null && 
            $rootScope.competitionMembers[x].Competition__c == $scope.chosenCompetitionRecord.Id){
              $scope.modelVal = $scope.chosenCompetitionRecord.Attainment_Goal__c;
              var chosenRecordMember = [];
              chosenRecordMember["Name"] = $rootScope.competitionMembers[x].Name;
              chosenRecordMember["Manager_Name"] = $rootScope.competitionMembers[x].Manager_Name__c;
              chosenRecordMember["Photo"] = $rootScope.competitionMembers[x].Member__r.SmallPhotoUrl;
              chosenRecordMember["Job_Title"] = $rootScope.competitionMembers[x].Job_Title__c;
              chosenRecordMember["Number_of_Activities"] = $rootScope.competitionMembers[x].Number_of_Activities__c;
              chosenRecordMember["Total_Points"] = $rootScope.competitionMembers[x].Total_Points__c;
              chosenRecordMember["Total_Points_Needed"] = parseInt($scope.chosenCompetitionRecord.Increase_Score_By__c) * parseInt($scope.chosenCompetitionRecord.Attainment_Goal__c);
              chosenRecordMember["Dollars"] = $rootScope.competitionMembers[x].Dollars__c;
              if($scope.chosenCompetitionRecord.Activity_Value__c == 'Revenue Closed')
                chosenRecordMember["Completion_Percentage"] = Math.floor((chosenRecordMember["Dollars"] / $scope.chosenCompetitionRecord.Attainment_Goal__c) * 100); 
              else if($scope.chosenCompetitionRecord.Reward_Type__c == 'Score')
                chosenRecordMember["Completion_Percentage"] = Math.floor((chosenRecordMember["Total_Points"] / chosenRecordMember["Total_Points_Needed"]) * 100);
              else
                chosenRecordMember["Completion_Percentage"] = Math.floor((chosenRecordMember["Number_of_Activities"] / $scope.chosenCompetitionRecord.Attainment_Goal__c) * 100);
              chosenRecordMember["Flames"] =  Math.ceil(Math.random() * 2.5);
              $scope.chosenCompetitionRecordMembers.push(chosenRecordMember);
          }
        }
        $scope.chosenCompetitionRecordMembers.sort($scope.sortByVal($scope.chosenCompetitionRecord));
        for(var z = 0; z < $scope.chosenCompetitionRecordMembers.length; z++){
          var a = z + 1;
          $scope.chosenCompetitionRecordMembers[z].place = a;
        }
        if($scope.userIsManager == true){
          $scope.myTeam = [];
          $scope.myTeam.forEach(function(val){
            console.log(val, 10);
          });
          $scope.myTeam = $scope.chosenCompetitionRecordMembers.filter(function(value, index){
            if(value.Manager_Name == $scope.managerName)
              return true;
            else
              return false;
          });
        }
        /*
        console.log(element);
        var competitionChosen = '{!competitionRecordChosen}';
        console.log(competitionChosen);
        var parseCompetitionChosen = JSON.parse(competitionChosen);
        console.log(parseCompetitionChosen);
        */
      }
      $scope.sortByVal = function(key) {
        return function(first,second){
          if(key.Activity_Value__c === 'Revenue Closed'){
            if (first.Dollars < second.Dollars)
              return 1;
            if (first.Dollars > second.Dollars)
              return -1;
            return 0;
          }
          else if(key.Reward_Type__c === 'Score'){
            if (first.Total_Points < second.Total_Points)
              return 1;
            if (first.Total_Points > second.Total_Points)
              return -1;
            return 0;
          }
          else{
            if (first.Number_of_Activities < second.Number_of_Activities)
              return 1;
            if (first.Number_of_Activities > second.Number_of_Activities)
              return -1;
            return 0;
          }
        }
      }
      $scope.selectedCompetitionType = function(activity, reward){
        $scope.chosenRecordActivity = activity;
        $scope.chosenRecordReward = reward;
        $scope.competitionLeaderDash();
      }
      $scope.isSelectedCompetitionType = function(activity, reward){
        if($scope.chosenRecordActivity === 'Revenue Closed'){
          return $scope.chosenRecordActivity === activity;
        }
        else if($scope.chosenRecordReward == 'Score'){
          return $scope.chosenRecordReward === reward;
        }
        else{
          if($scope.chosenRecordReward === reward && $scope.chosenRecordActivity != 'Revenue Closed'){
            return true;
          }
          else{}
        }
      }
      $scope.returnToList = function(){
        $rootScope.option = 'currentCompetition';
      }
    var compCompleted = 72;
    var pointsAccumulated = 4792;
    var avgPlace = 3;
    
    $('#competition-completed').animateNumber({ number: compCompleted, easing: 'easeInQuad'}, 3000);
    $('#points-accumulated').animateNumber({ number: pointsAccumulated, easing: 'easeInQuad'}, 3000);
    $('#avg-place-in-comp').animateNumber({ number: avgPlace, easing: 'easeInQuad'}, 3000);
    
    //temp vals for the dashboard

    var myEmployees = [];
    var otherEmployees = [];
    var team2Employees = [];
    var team3Employees = [];
    var tempNum = 35;
    var team2Num = 30;
    var team3Num = 28;
    var otherNum = 30;
    var dateLength = 31;
    $scope.axis = [];
    for(var l = 1; l < dateLength; l++){
      var remainingChartDays = dateLength - l;
      var num = Math.floor(Math.random() * 3);
      var num2 = Math.floor(Math.random() * 2);
      var num3 = Math.floor(Math.random() * 2);
      var num4 = Math.floor(Math.random() * 2);
      tempNum = tempNum + num;
      team2Num = team2Num + num3;
      team3Num = team3Num + num4;
      otherNum = otherNum + num2;
      var today = new Date();
      today.setDate(today.getDate() - remainingChartDays);
      var date = today.getDate();
      var month = today.getMonth() + 1;
      var datemonth = month + '/' + date;
      otherEmployees.push([l, otherNum]);
      team2Employees.push([l, team2Num]);
      team3Employees.push([l, team3Num]);
      myEmployees.push([l, tempNum]);
      $scope.axis.push([l, datemonth]);
    }

    var data1 = [
        {
            label: 'Your Team',
            data: myEmployees,
            color: '#6bd16b',
            lines: {show: true }
        },
        {
            label: 'John Andersons Team',
            data: otherEmployees,
            color: '#ff4866',
            lines: {show: true }
        },
        {
            label: 'Peter Gilligans Team',
            data: team2Employees,
            color: '#2f80e7',
            lines: {show: true }
        },
        {
            label: 'Average',
            data: team3Employees,
            color: '#808080',
            lines: {show: true }
        }
    ];      
    
    $scope.data = data1;

    $scope.competitionLeaderDash = function(){  
      var competitors = [];
      $scope.competitorAxis = [];
      $scope.competitorValues = [];
      $scope.yAxis = [];
      var iterator = 0;
      if($scope.chosenRecordActivity == 'Revenue Closed'){
        $scope.compType = 'Revenue Closed'
        $scope.chosenCompetitionRecordMembers.forEach(function(){
          $scope.competitorValues.push($scope.chosenCompetitionRecordMembers[iterator].Dollars);
          competitors.push([iterator, $scope.chosenCompetitionRecordMembers[iterator].Dollars]);
          $scope.competitorAxis.push($scope.chosenCompetitionRecordMembers[iterator].Name);
          iterator++;
        });
      }
      else{}
      if($scope.chosenRecordReward == 'Score'){
        $scope.compType = 'Score';
        $scope.chosenCompetitionRecordMembers.forEach(function(){
          competitors.push([iterator, $scope.chosenCompetitionRecordMembers[iterator].Total_Points]);
          $scope.competitorValues.push($scope.chosenCompetitionRecordMembers[iterator].Total_Points);
          $scope.competitorAxis.push($scope.chosenCompetitionRecordMembers[iterator].Name);
          $scope.modelVal = $scope.chosenCompetitionRecordMembers[iterator].Total_Points_Needed;
          iterator++;          
        });
      }
      else{}
      for(var l = 5; l >= 1; l--){
        $scope.yAxis.push(Math.floor($scope.modelVal * (l/5)));
      }
      var compDataPassed = [
        {
          data : competitors,
          color: '#6bd16b',
          bars: { show: true, 'align': "center", 'barWidth':0.8}
        }
      ];
      $scope.compData = compDataPassed;  

      $scope.teamCompetitionDash();   
    }

    $scope.teamCompetitionDash = function(){
      function returnMyTeam(mem){
        if(mem.Manager_Name === $scope.managerName)
          return true;
        else
          return false; 
      }
      function returnPercentComplete(value){
        return value.Completion_Percentage;
      }
      function teamAverage(array){
        function plus(a,b){
          console.log(a,b);
          return a + b;
        }
        return Math.floor(array.reduce(plus) / array.length);
      }
      var tempMyTeamCompData = $scope.chosenCompetitionRecordMembers.filter(returnMyTeam);
      var tempMyTeamCompData = tempMyTeamCompData.map(returnPercentComplete);
      var myTeamCompData = teamAverage(tempMyTeamCompData);

      var myTeamCompArray = [];
      var secondTeamCompArray = [];
      var thirdTeamCompArray = [];
      var averageTeamCompArray = [];

      $scope.teamCompXAxis.push([0, 'Arrash Yasavolians Team'], [1, 'John Andersons Team'], [2, 'Peter Gilligans Team'], [3, 'Average'])

      myTeamCompArray.push([0, myTeamCompData]);
      secondTeamCompArray.push([1, 47]);
      thirdTeamCompArray.push([2, 57]);
      averageTeamCompArray.push([3, 52]);
      $scope.teamData = [
        {
          label : 'Arrash Yasavolians Team',
          data : myTeamCompArray,
          color: '#6bd16b',
          bars: { show: true, align: 'left', 'barWidth':0.6}
        },
        {
          label : 'John Andersons Team',
          data : secondTeamCompArray,
          color: '#ff4866',
          bars: { show: true, align: 'left', 'barWidth':0.6}
        },
        {
          label : 'Peter Gilligans Team',
          data : thirdTeamCompArray,
          color: '#2f80e7',
          bars: { show: true, align: 'left', 'barWidth':0.6}
        },
        {
          label : 'Average',
          data : averageTeamCompArray,
          color: '#505050',
          bars: { show: true, align: 'left', 'barWidth':0.6}
        }
      ]
    }

      //$scope.showGraphs();
      $scope.selectOption('currentCompetition');
      //updateCompetitionsList();
  });
  app.directive('chart', function(){
      return{
          restrict: 'E',
          link: function(scope, elem, attrs){
              
              var chart = null,
                  options = {
                  legend: {
                    noColumns: 0,
                    position: "ne",
                  },
                  axisLabels: {
                    show: true
                  },
                  xaxes: [{
                    axisLabel: 'Date',
                  }],
                  yaxes: [{
                    position: 'left',
                    axisLabel: '% Complete',
                  }],
                  xaxis: {
                      ticks: scope.axis
                  },
                  yaxis: {
                    min:0, 
                    max: 100
                  },
                  grid: {
                    labelMargin: 10,
                    backgroundColor: '#f5f5f5',
                    color: '#c2c2c2',
                    borderColor: null
                  }
                };
                      
              var data = scope[attrs.ngModel];            
              
              // If the data changes somehow, update it in the chart
              scope.$watch('data', function(v){
                   if(!chart){
                      chart = $.plot(elem, v , options);
                      elem.show();
                  }else{
                      chart.setData(v);
                      chart.setupGrid();
                      chart.draw();
                  }
              });
          }
      };
  });
  app.directive('compChart', function(){
      return{
          restrict: 'E',
          link: function(scope, elem, attrs){
              scope.$watch('compData', function(v){
              if(scope.compData != null){
              var compChart = null,
                  options = {

                  axisLabels: {
                    show: false
                  },
                  /*
                  xaxes: [{
                    axisLabel: 'Competition Member',
                  }],
                  yaxes: [{
                    position: 'left',
                    axisLabel: 'Value',
                  }],
                  */
                  xaxis: {
                      ticks: scope.competitorAxis
                  },
                  yaxis: {
                    min:0, 
                    max: scope.modelVal,
                    ticks: 20 /*function(axis){ return axis.max < 5 ? [1,2,3,4,5] : [1,2,3,4,5]; }*/, 

                    tickFormatter: function(val, axis) { return  ''/* val > 10000 ? val.toString().substring(0, 4) +'k' : val; */ }
                  },
                  grid:{
                    labelMargin: 0,
                    backgroundColor: '#f5f5f5',
                    color: '#c2c2c2',
                    borderColor: null
                  }
                };
                      
              var data = scope[attrs.ngModel];            
              // If the data changes somehow, update it in the chart
                    compChart = $.plot(elem, v , options);
                    elem.show();
                    compChart.setData(v);
                    compChart.setupGrid();
                    compChart.draw();
              $('html, body').animate({ scrollTop: 0 }, 0);
              /*
              compChartHeight = $("#comp-chart-container").css('height');
              compChartWidth = $("#comp-chart-container").css('width');
              $('.competition-chart').css({'width': compChartWidth, 'height': compChartHeight});   
              */             
              }
            });
          }
      };
  });
  app.directive('updatexTicks', function(){
      return{
          restrict: 'E',
          templateUrl: 'update-x-ticks.html',
          link: function(scope, elem, attrs){
              scope.$watch('compData', function(v){
              if(scope.compData != null){
               $("div.x-axis-tick-container").each(function(i,ele) {
                  ele = $(ele);
                  var length = 100 / scope.competitorAxis.length;
                  length = length.toString() + '%';
                  ele.css("width", length);
              });
              /*
              compChartHeight = $("#comp-chart-container").css('height');
              compChartWidth = $("#comp-chart-container").css('width');
              $('.competition-chart').css({'width': compChartWidth, 'height': compChartHeight});   
              */             
              }
            });
          }
      };
  });
  app.directive('updateyTicks', function(){
      return{
          restrict: 'E',
          templateUrl: 'update-y-ticks.html',
          link: function(scope, elem, attrs){
              scope.$watch('compData', function(v){
              if(scope.compData != null){
               $("div.graph-value").each(function(i,ele) {
                  ele = $(ele);
                  var length = 100 / scope.competitorAxis.length;
                  length = length.toString() + '%';
                  ele.css("width", length);
              });         
              }
            });
          }
      };
  });
  app.directive('personalDashboard', function(){
      return{
          restrict: 'E',
          templateUrl: 'personal-dashboard.html',
          link: function(scope, elem, attrs){
              scope.$watch('compData', function(v){
              if(scope.compData != null){
               $("div.personal-dial").each(function(i,ele) {
                  ele.innerHTML = scope.myTeam[i].Completion_Percentage;
                  ele.innerHTML = ele.innerHTML + '%';
                  ele = $(ele);
                  $(this)
                    .val(scope.myTeam[i].Completion_Percentage)
                    .trigger('change');
                  $(this).knob({
                    lineCap : 'round',
                    inputColor : '#6bd16b',
                    fgColor : '#6bd16b',
                    readOnly : true
                  });
              });         
              }
            });
          }
      };
  });

  app.directive('teamChart', function(){
      return{
          restrict: 'E',
          link: function(scope, elem, attrs){
              scope.$watch('teamData', function(v){
              if(scope.compData != null){
              var teamChart = null,
                  options = {
                  legend: {
                    noColumns: 0,
                    position: "ne",
                  },
                  axisLabels: {
                    show: false
                  },
                  /*
                  xaxes: [{
                    axisLabel: 'Competition Member',
                  }],
                  yaxes: [{
                    position: 'left',
                    axisLabel: 'Value',
                  }],
                  */
                  xaxis: {
                      ticks: scope.teamCompXAxis
                      //tickFormatter: function(val, axis) { return  'hi'}
                  },
                  
                  yaxis: {
                    min:0, 
                    max: 100,
                    ticks: 5 /*function(axis){ return axis.max < 5 ? [1,2,3,4,5] : [1,2,3,4,5]; }*/, 

                    tickFormatter: function(val, axis) { return   val+ '%'}
                  },
                  grid:{
                    labelMargin: 40,
                    backgroundColor: '#f5f5f5',
                    color: '#c2c2c2',
                    borderColor: null
                  }
                };
                      
              var data = scope[attrs.ngModel];            
              // If the data changes somehow, update it in the chart
                    teamChart = $.plot(elem, v , options);
                    elem.show();
                    teamChart.setData(v);
                    teamChart.setupGrid();
                    teamChart.draw();
              /*
              compChartHeight = $("#comp-chart-container").css('height');
              compChartWidth = $("#comp-chart-container").css('width');
              $('.competition-chart').css({'width': compChartWidth, 'height': compChartHeight});   
              */             
              }
            });
          }
      };
  });
  /*
  app.directive('updatechartVals', function(){
      return{
          restrict: 'E',
          templateUrl: 'update-y-ticks.html'
      };
  });
*/
  app.controller('formCtrl', function ($scope, $rootScope) {
    $scope.newCompMemList = "";
    $scope.newCompMemberArray = [];
    $scope.divback = [];
    $scope.formVals = [];
    $scope.tempVal = 1;
    $scope.percentComplete = 0;
    $scope.addedGoal = false;
    $scope.addedEndDate = false;
    $scope.addedStartDate = false;
    $scope.addedSpiff = false;
    $scope.addedScore = false;
    $scope.addedMem = false;
    $scope.addedDescription = false;
    $scope.addedRewardType = false;
    $scope.addedActivityType = false;
    $scope.barVal = 0;
    $scope.addedNumberofActivities = false;
    $scope.percentBarVal = '0%';
    $scope.containerDropList = [];

    $scope.startTimeListen = function (time) {
      var timeHold = time.toTimeString();
      timeHold = timeHold.slice(0, 8);
      $scope.formVals['startTime'] = timeHold;
      //console.log(time.toTimeString().match(/\d{2}:\d{2}:\d{2}/gi)[0]);
    }
    $scope.endTimeListen = function (time) {
      var timeHold = time.toTimeString();
      timeHold = timeHold.slice(0, 8);
      $scope.formVals['endTime'] = timeHold;
    }
    $scope.goalListen = function(goal){
      $scope.formVals["goal"] = goal;
      if(goal == null && $scope.addedGoal == true){
        $scope.addedGoal = false;
        $scope.percentComplete = $scope.percentComplete - ((1/7) * 100);
        console.log($scope.percentComplete);
      }
      else if(goal != null && $scope.addedGoal == false){
        $scope.addedGoal = true;
        $scope.percentComplete = $scope.percentComplete + ((1/7) * 100);
        console.log($scope.percentComplete);
      }
      else{}
      $scope.updateBar();
    }
    $scope.updateBar = function(){
      var progressBar = document.getElementById('progress-bar');
      $scope.barVal = Math.ceil($scope.percentComplete);
      if($scope.barVal > 100){
        $scope.barVal = 100;
        $scope.percentBarVal = $scope.barVal.toString() + '%';
        $(progressBar).animate({'width': $scope.percentBarVal});
      }
      else{
        $scope.percentBarVal = $scope.barVal.toString() + '%';
        $(progressBar).animate({'width': $scope.percentBarVal});
      }
    }
    $scope.startDateListen = function(date){
      var tempDate = date.toString();
      $scope.formVals["startDate"] = tempDate.slice(0,10);
      if(date == null && $scope.addedStartDate == true){
        $scope.addedStartDate = false;
        $scope.percentComplete = $scope.percentComplete - ((1/7) * 100);
        console.log($scope.percentComplete);
      }
      else if(date != null && $scope.addedStartDate == false){
        $scope.addedStartDate = true;
        $scope.percentComplete = $scope.percentComplete + ((1/7) * 100);
        console.log($scope.percentComplete);
      }
      else{}
      $scope.updateBar();
    }
    $scope.endDateListen = function(date){
      var tempDate = date.toString();
      $scope.formVals["endDate"] = tempDate.slice(0,10);
      if(date == null && $scope.addedEndDate == true){
        $scope.addedEndDate = false;
        $scope.percentComplete = $scope.percentComplete - ((1/7) * 100);
        console.log($scope.percentComplete);
      }
      else if(date != null && $scope.addedEndDate == false){
        $scope.addedEndDate = true;
        $scope.percentComplete = $scope.percentComplete + ((1/7) * 100);
        console.log($scope.percentComplete);
      }
      else{}
      $scope.updateBar();
    }
    $scope.spiffListen = function(spiff){
      $scope.formVals["spiff"] = spiff;
      if(spiff == null && $scope.addedSpiff == true){
        $scope.addedSpiff = false;
        $scope.percentComplete = $scope.percentComplete - ((1/14) * 100);
        console.log($scope.percentComplete);
      }
      else if(spiff != null && $scope.addedSpiff == false){
        $scope.addedSpiff = true;
        $scope.percentComplete = $scope.percentComplete + ((1/14) * 100);
        console.log($scope.percentComplete);
      }
      else{}
      $scope.updateBar();
    }
    $scope.scoreListen = function(score){
      $scope.formVals["pointsPerActivity"] = score;
      if(score == null && $scope.addedScore == true){
        $scope.addedScore = false;
        $scope.percentComplete = $scope.percentComplete - ((1/28) * 100);
        console.log($scope.percentComplete);
      }
      else if(score != null && $scope.addedScore == false){
        $scope.addedScore = true;
        $scope.percentComplete = $scope.percentComplete + ((1/28) * 100);
        console.log($scope.percentComplete);
      }
      else{}
      $scope.updateBar();
    }
    $scope.descriptionListen = function(description){
      $scope.formVals["description"] = description;
      if(description == null && $scope.addedDescription == true){
        $scope.addedDescription = false;
        $scope.percentComplete = $scope.percentComplete - ((1/7) * 100);
        console.log($scope.percentComplete);
      }
      else if(description != null && $scope.addedDescription == false){
        $scope.addedDescription = true;
        $scope.percentComplete = $scope.percentComplete + ((1/7) * 100);
        console.log($scope.percentComplete);
      }
      else{}
      $scope.updateBar();
    }
    $scope.memberadd = function(member){
      if(member == ''){
        $('.mem-list-drop').css('display','none');
        $scope.containerDropList = [];        
      }
      else{
        console.log(member);
        var dropList = document.getElementById('mem-list');
        var evryone = 'Everyone';
        var myTm = 'My Team';
        var everyone = 'Everyone';
        var myTeam = 'My Team';
        var newMem = '';
        $scope.memberDropList = [];
        for(y = 0; y < member.length; y++){
          if(y == 0){
            var fir = member[y].toUpperCase();
            newMem = newMem + fir;
          }
          else if(member[y] == ' '){
            var z = y + 1;
            var sec = member[z].toUpperCase();
            newMem = newMem + ' ';
            newMem = newMem + sec;
            y++;
          }
          else{
            newMem = newMem + member[y];
          }
        }
        for(x = 0; x < $rootScope.allUsers.length; x++){
         if($rootScope.allUsers[x].Department === 'Sales'){
          if($rootScope.allUsers[x].Name.indexOf(newMem) >= 0){
            console.log($rootScope.allUsers[x].Name);
            $(dropList).css('display','block');
            $scope.memberDropList.push($rootScope.allUsers[x]);
          }
          else{}
         }
         else{}
        }
        if(everyone.indexOf(newMem) >= 0){
          $(dropList).css('display','block');
          $scope.containerDropList.push(everyone);
        }
        else if(myTeam.indexOf(newMem) >= 0){
          $(dropList).css('display','block');
          $scope.containerDropList.push(myTm);          
        }
        else{}
        for(var a = 0; a <= $scope.divback.length; a++){
          if($scope.divback[a].member.indexOf(newMem) >= 0){
            console.log($scope.divback[a].member);
            var divBlock = document.getElementById($scope.divback[a].id);
            $(divBlock).css('color', '#6bd16b');
          }
        }
      }
      $scope.updateBar();
    }
    $scope.addMem = function(mem, Id){
      var memExists = false;
      for(var z = 0; z < $scope.divback.length; z++){
        console.log($scope.divback[z].member);
        if($scope.divback[z].member == mem){
          memExists = true;
        }
        else{
        }
      }
      if(memExists == false){
        $scope.containerDropList = [];   
        var tempdivback = [];
        tempdivback['member'] = mem;
        tempdivback['id'] = Id;
        $scope.divback.push(tempdivback);
        if($scope.addedMem == false){
          $scope.percentComplete = $scope.percentComplete + ((1/7) * 100);
        }
        $scope.addedMem = true;
        console.log($scope.percentComplete);
        var divBlock = document.getElementById(tempdivback.id);
        $(divBlock).css('color', '#6bd16b');
        $('#mem-drop-val').css('display','inline');
        $('.mem-list-drop').css('display', 'none');
        document.querySelector('.drop-control').value = '';
      }
      $scope.updateBar();
    }
    $scope.deleteMember = function(selMem){
      var y = 999;
      for(l = 0; l < $scope.divback.length; l++){
        if($scope.divback[l].member === selMem){
          y = l;
        }      
      }
      $scope.divback.splice(y, 1);
      if($scope.divback[0] == null){
        $scope.addedMem = false;
        $scope.percentComplete = $scope.percentComplete - ((1/7) * 100);
        console.log($scope.percentComplete);
      }
      $scope.updateBar();
    }
    $scope.showValues = function(element){
      var elementChosen = document.getElementById(element);
      if(elementChosen.style.display === 'block')
        $(elementChosen).css('display','none');
      else{
        $(elementChosen).css('display', 'block');
      }
    }
    $scope.dropValueChosen = function(chosen, elementUpdate, dropDown){
      if(chosen == 'Score' || chosen == 'Spiff'){
        if($scope.addedRewardType == false){
          $scope.percentComplete = $scope.percentComplete + ((1/14) * 100);
          $scope.addedRewardType = true;
        }
        $scope.formVals['rewardType'] = chosen;
        console.log($scope.formVals['rewardType']);
      }
      else if(chosen == 'Sales Calls' || chosen == 'Sales Emails' || 
        chosen == 'Sales Activity' || chosen == 'Revenue Closed' || chosen == 'Number of Converted Opptys'){
        $scope.formVals['activityValue'] = chosen;
        if($scope.addedActivityType == false){
          $scope.percentComplete = $scope.percentComplete + ((1/7) * 100);
          $scope.addedActivityType = true;
        }
      }
      else if(chosen == 'will'){
        $scope.formVals['baseOffNumberOfActivities'] = 'Yes';
        $scope.formVals['spiff'] = '';
        document.querySelector('#score-field').value = '';
        if($scope.addedNumberofActivities == false){
          $scope.percentComplete = $scope.percentComplete + ((1/28) * 100);
          $scope.addedNumberofActivities = true;
        }
      }
      else if(chosen == 'will not'){
        $scope.formVals['baseOffNumberOfActivities'] = 'No';
        $scope.formVals['pointsPerActivity'] = '';
        document.querySelector('#spiff-field').value = '';
        if($scope.addedNumberofActivities == false){
          $scope.percentComplete = $scope.percentComplete + ((3/28) * 100);
          $scope.addedNumberofActivities = true;
        }
      }
      else{}
      
      document.getElementById(elementUpdate).innerHTML = chosen;
      var elementChosen = document.getElementById(elementUpdate);
      var dropChosen = document.getElementById(dropDown);
      var extraOptions = document.getElementById('extra-form-options');
      $(elementChosen).css('color','#6bd16b');
      $(dropChosen).css('display','none');
      if(chosen == 'Score'){
        $(extraOptions).css('display','block');
      
      }
      else if(chosen == 'Spiff'){
        $(extraOptions).css('display','none');
      }
      else{}
      $scope.updateBar();
    }
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.openSecond = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.openedSecond = true;
    };

    $scope.updateDescripLength = function(description){
      var description = document.getElementById('field-descript').value;
      var descriptionField = document.getElementById('field-descript');
      descriptionLength = description.length;
      var descriptionLengthFull = descriptionLength * 13;
      descriptionLength = descriptionLengthFull.toString() + 'px';
      if(descriptionLengthFull <= 800){
        $(descriptionField).css('width', descriptionLength);
        var descripHeight = 90;
        console.log(descripHeight);
        descripHeight = descripHeight.toString() + 'px';
        console.log(descripHeight);
        $(descriptionField).css('height', descripHeight);
      }
      else{
        var lines = descriptionLengthFull / 800;
        lines++;
        lines = Math.floor(lines);
        if($scope.tempVal != lines){
          $scope.tempVal = lines;
          //var descripHeight = $(descriptionField).css('height');
          var descripHeight = lines * 45;
          console.log(descripHeight);
          descripHeight = descripHeight.toString() + 'px';
          console.log(descripHeight);
          $(descriptionField).css('height', descripHeight);
        }
        else{}
      }

      console.log(descriptionLength);
    }

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $rootScope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.update = function() {
      var d = new Date();
      d.setHours( 14 );
      d.setMinutes( 0 );
      $scope.mytime = d;
    };

    $scope.clear = function() {
      $scope.mytime = null;
    };

    $scope.submit = function(){
      $rootScope.option = 'currentCompetition';
    }
  });
})();

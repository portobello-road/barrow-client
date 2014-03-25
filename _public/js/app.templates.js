angular.module('app.templates', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('app/partials/application.jade', [
'',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('app/partials/main.jade', [
'',
'<Reload>test</Reload>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('app/partials/shared/top-bar.jade', [
'',
'<ul class="title-area">',
'  <li class="name"></li>',
'</ul>',
'<section class="top-bar-section">',
'  <ul class="right">',
'    <li title="Messages"><a><i alt="No unread messages" class="fi-mail"></i></a></li>',
'    <li title="Personal Information Access Status"><a><i alt="Personal Information is unavailable" class="fi-folder-lock"></i></a></li>',
'    <li title="Cart"><a><i alt="Cart is empty" class="fi-shopping-cart">0</i></a></li>',
'    <li class="has-dropdown"><a><i alt="User is" class="fi-torso">John Q. User</i></a>',
'      <ul class="dropdown">',
'        <li><a><i class="fi-wrench">Settings</i></a></li>',
'        <li><a><i class="fi-x-circle">Sign Out</i></a></li>',
'      </ul>',
'    </li>',
'  </ul>',
'  <ul class="left">',
'    <li title="Connection Status"><a><i alt="Connection status is Connected" class="fi-check"></i></a></li>',
'    <li class="has-dropdown"><a>Explore</a></li>',
'    <li class="has-form">',
'      <div class="row collapse">',
'        <div class="large-9 small-10 columns">',
'          <input type="text" placeholder="Search">',
'        </div>',
'        <div class="large-3 small-2 columns"><a class="button expand [radius round]"><i title="Search" alt="Perform Search" class="fi-magnifying-glass"></i></a></div>',
'      </div>',
'    </li>',
'  </ul>',
'</section>',''].join("\n"));
}]);

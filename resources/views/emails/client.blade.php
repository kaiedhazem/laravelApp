@component('mail::message')

<b>Project Management Team</b>

 

<p><b> Welcome to us Dear customer {{ $data['name'] }}</b> </p>
<p>Your login is  : {{ $data['login'] }}</p>
<p>Your password is :  {{ $data['password'] }}</p>

Thanks,<br>
{{ config('app.name') }}
@endcomponent

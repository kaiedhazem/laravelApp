@component('mail::message')
<b>Project Management Team</b>

Welcome to our Work Team
<p>Your login is  : {{ $data['login'] }}</p>
<p>Your Password is : {{ $data['password'] }}</p>
<p> Your role in our project is : {{ $data['role']}} </p>


Thanks,<br>


{{ config('app.name') }}
@endcomponent
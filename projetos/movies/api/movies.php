<?php
    $curl = curl_init();

    curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://api.themoviedb.org/3/discover/movie',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_HTTPHEADER => array(
        'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjZmMTE0NTgyZDZkNWEyYzY1NTJiZGE3YWNiNDBhMyIsInN1YiI6IjY1NmE5MWIwNGE0YmY2MDBjNTAxYWFlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qMTcMYfdASHZfcgjxj3MIwMzQFv_EFSY7DDO_-E5NJc'
    ),
    ));

    $response = curl_exec($curl);
    $data = json_decode($response, true);
?>
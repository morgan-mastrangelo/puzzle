<script setup lang="ts">
import Swal from 'sweetalert2';

Swal.fire({
   icon: 'info',
   html: "<h1>Hello</h1>",
   showCancelButton: true,
   confirmButtonText: "OK",
   cancelButtonText: "CLOSE"
});
</script>

<template>
    <h1>Register</h1>
</template>
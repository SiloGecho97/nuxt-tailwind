<template>
          <div
        class='w-full px-4 sm:px-6 shadow-xl'
      >
        <div class="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div class="flex items-center justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span class="sr-only">Workflow</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
            <span class="text-primary_color dark:text-white text-xl uppercase ml-4 font-bold">
             Pairing
            </span>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            
              <button
                class="rounded-md p-2 inline-flex items-center justify-center text-primary_color hover:text-blueGray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span class="sr-only">Open menu</span>
                <FaBars class="text-xl" />
              </button>
           
          </div>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
           
              <button
               
                class="flex focus:border-primary_color dark:border-primary_color dark:focus:border-white focus:border whitespace-nowrap text-base font-medium text-primary_color dark:text-white hover:text-blueGray-500 dark:hover:text-blueGray-300"
              >
               <FaUserCircle class="text-2xl ml-4" /></button>
           
            
          </div>
        </div>
      </div>
</template>
<script>
export default {
    
}
</script>
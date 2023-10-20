<template>
    <!-- Contents of Table -->
    <div class="py-6 px-8 md:px-12 mb-2 border border-starwars-yellow bg-transparent rounded-xl">
        <div>
            <div class="flex flex-wrap -mx-3 items-center">
                <div class="w-full xl:w-auto px-3 mb-4 xl:mb-0">
                    <span class="text-3xl font-heading font-semibold text-starwars-yellow">Sort by</span>
                </div>
                <div class="w-full md:w-1/2 xl:w-auto px-3 mb-2 md:mb-0">
                    <div class="relative border border-starwars-yellow bg-transparent">
                        <select
                            class="relative text-starwars-yellow w-full xl:w-67 pl-6 pr-12 pt-4 pb-3 text-xs font-semibold bg-transparent outline-none appearance-none cursor-pointer"
                            name="" id="">
                            <option class="text-black" value="">New users</option>
                            <option class="text-black" value="">Progress</option>
                            <option class="text-black" value="">Date</option>
                        </select>
                        <span class="absolute top-1/2 right-0 transform -translate-y-1/2 mr-6">
                            <svg width="11" height="7" viewbox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.6641 1.30503L9.72073 0.361694L5.9974 4.08503L5.33073 4.80505L4.66406 4.08503L0.94073 0.361694L-0.00260357 1.30503L5.33073 6.63836L10.6641 1.30503Z"
                                    fill="#04082F"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="w-full md:w-1/2 xl:w-auto px-3 relative">
                    <div class="relative border border-starwars-yellow bg-transparent">
                        <select
                            class="relative text-starwars-yellow w-full xl:w-67 pl-6 pr-12 pt-4 pb-3 text-xs font-semibold bg-transparent outline-none appearance-none cursor-pointer"
                            name="" id="">
                            <option class="text-black" value="">Years</option>
                            <option class="text-black" value="">Months</option>
                            <option class="text-black" value="">Time</option>
                        </select>
                        <span class="absolute top-1/2 right-0 transform -translate-y-1/2 mr-6">
                            <svg width="11" height="7" viewbox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.6641 1.30503L9.72073 0.361694L5.9974 4.08503L5.33073 4.80505L4.66406 4.08503L0.94073 0.361694L-0.00260357 1.30503L5.33073 6.63836L10.6641 1.30503Z"
                                    fill="#04082F"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Table -->
    <div class="w-full overflow-x-auto">
        <table class="w-full min-w-max">
            <thead class="border border-starwars-yellow bg-transparent text-starwars-yellow text-xs font-norma">
                <tr>
                    <th class="p-0">
                        <div class="h-16 pl-8 pr-6 flex items-center rounded-tl-xl">
                            <input type="checkbox" value="" id="">
                            <label class="ml-4 text-lg font-semibold" for="">Name</label>
                        </div>
                    </th>
                    <th class="p-0">
                        <div class="h-16 pl-8 flex items-center">
                            <span>Total</span>
                        </div>
                    </th>
                    <th class="p-0">
                        <div class="h-16 pl-8 flex items-center">
                            <span>Progress</span>
                        </div>
                    </th>
                    <th class="p-0">
                        <div class="h-16 pl-8 flex items-center">
                            <span>Date added</span>
                        </div>
                    </th>
                    <th class="p-0">
                        <div class="h-16 pl-8 flex items-center">
                            <span>Premium</span>
                        </div>
                    </th>
                    <th class="p-0">
                        <div class="h-16 pl-8 flex items-center">
                            <span>Country</span>
                        </div>
                    </th>
                    <th class="p-0">
                        <div
                            class="h-16 flex items-center justify-center rounded-tr-xl">
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-starwars-yellow border border-starwars-yellow">
                    <td class="p-0">
                        <div class="flex h-20 items-center w-full pl-8 bg-transparent">
                            <input type="checkbox" value="" id="">
                            <div class="flex ml-4 items-center">
                                <img class="h-9 w-9" src="https://placehold.co/600x400/png" alt="">
                                <div class="ml-4">
                                    <h4 class="text-base font-semibold leading-none">Elena
                                        Manolera
                                        Strizer</h4>
                                    <span class="text-xs font-normal">elenas@email.com</span>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="p-0">
                        <div class="flex h-20 pl-8 items-center ">
                            <span class="text-xs  font-normal">3,578.00</span>
                        </div>
                    </td>
                    <td class="p-0">
                        <div class="flex h-20 pl-8 items-center ">
                            <div class="h-1 w-24 bg-gray-900">
                                <div class="h-full w-4/6 bg-blue-500"></div>
                            </div>
                        </div>
                    </td>
                    <td class="p-0">
                        <div class="flex h-20 pl-8 items-center">
                            <span class="text-xs  font-normal">14 Sep, 2022</span>
                        </div>
                    </td>
                    <td class="p-0">
                        <div class="flex h-20 pl-8 items-center justify-center w-full ">
                            <svg width="32" height="32" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="16" fill="#EBD71C"></rect>
                                <rect x="22.9531" y="9.63599" width="2" height="16" rx="1"
                                    transform="rotate(45 22.9531 9.63599)" fill="black"></rect>
                                <rect x="7.625" y="17.0431" width="2" height="7.57417" rx="1"
                                    transform="rotate(-45 7.625 17.0431)" fill="black"></rect>
                            </svg>
                        </div>
                    </td>
                    <td class="p-0">
                        <div class="flex h-20 pl-8 items-center ">
                            <span class="text-xs font-normal">England</span>
                        </div>
                    </td>
                    <td class="p-0">
                        <div class="flex h-20 px-12 items-center justify-center ">
                            <a class="group inline-flex items-center font-base text-starwars-yellow font-semibold" href="#">
                                <span class="mr-2">More</span>
                                <div class="relative transition duration-500 animate-pulse">
                                    <svg width="7" height="12" viewbox="0 0 7 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.00193 0.666626L0.0585938 1.60996L3.78193 5.33329L4.50195 5.99996L3.78193 6.66663L0.0585938 10.39L1.00193 11.3333L6.33526 5.99996L1.00193 0.666626Z"
                                            fill="currentColor"></path>
                                    </svg>
                                    <div
                                        class="absolute top-0 right-0 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <svg width="7" height="12" viewbox="0 0 7 12" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.00193 0.666626L0.0585938 1.60996L3.78193 5.33329L4.50195 5.99996L3.78193 6.66663L0.0585938 10.39L1.00193 11.3333L6.33526 5.99996L1.00193 0.666626Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 -mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <svg width="7" height="12" viewbox="0 0 7 12" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.00193 0.666626L0.0585938 1.60996L3.78193 5.33329L4.50195 5.99996L3.78193 6.66663L0.0585938 10.39L1.00193 11.3333L6.33526 5.99996L1.00193 0.666626Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- Table LoadMore -->
    <div class="pt-10 px-8 pb-14 text-center bg-transparent border border-starwars-yellow rounded-b-xl">
        <a class="group relative inline-block h-12 w-full sm:w-64 bg-blueGray-900 rounded" href="#">
            <div
                class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                <div class="flex h-full w-full items-center justify-center bg-transparent border-2 border-starwars-yellow">
                    <span class="text-base text-starwars-yellow font-semibold uppercase">See more</span>
                </div>
            </div>
        </a>
    </div>
</template>
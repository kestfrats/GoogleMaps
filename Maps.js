let Google = undefined;

function renderMap() {
    Google = google;
}

const Maps = (function (AdminUI) {
    const locations = [
        {
            content: {
                title: 'Cenk1',
                address: 'Bilmemne Mah. </br> Bilmemne Sok. </br> no:99',
            },
            position: { lat: 41.031111, lng: 28.999999 },
        },
        {
            content: { title: 'Cenk2' },
            position: { lat: 41.032222, lng: 28.998888 },
        },
        {
            content: { title: 'Cenk3' },
            position: { lat: 41.033333, lng: 28.997777 },
        },
        {
            content: { title: 'Cenk4' },
            position: { lat: 41.034444, lng: 28.996666 },
        },
        {
            content: { title: 'Cenk5' },
            position: { lat: 41.035555, lng: 28.995555 },
        },
        {
            content: { title: 'Cenk6' },
            position: { lat: 41.036666, lng: 28.994444 },
        },
        {
            content: { title: 'Cenk7' },
            position: { lat: 41.037777, lng: 28.993333 },
        },
        {
            content: { title: 'Cenk8' },
            position: { lat: 41.038888, lng: 28.992222 },
        },
        {
            content: { title: 'Cenk9' },
            position: { lat: 41.039999, lng: 28.991111 },
        },
        { content: { title: 'Cenk10' }, position: { lat: 41.03, lng: 28.99 } },
        {
            content: { title: 'Cenk11' },
            position: { lat: 41.041111, lng: 28.1 },
        },
        {
            content: { title: 'Cenk12' },
            position: { lat: 41.042222, lng: 28.101111 },
        },
        {
            content: { title: 'Cenk13' },
            position: { lat: 41.043333, lng: 28.102222 },
        },
        {
            content: { title: 'Cenk14' },
            position: { lat: 41.044444, lng: 28.103333 },
        },
    ];

    return {
        init: function () {
            AdminUI.googleMaps.init(Google, {
                map_marker_type: AdminUI.googleMaps.markerType.CLUSTERED,
                container_id: undefined,
                center: undefined,
                markers: locations,
            });
        },
    };
})(AdminUI);
window.onload = Maps.init;

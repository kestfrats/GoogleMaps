const GoogleMaps = (function () {
    let Google = undefined;
    let container = undefined;
    let center = { lat: 41.033455, lng: 28.991182 };
    let map = undefined;
    let mapMarkers = [];

    const renderContainer = function (container_id) {
        if (!container_id) container_id = 'map-container';
        container = document.getElementById(container_id);
        container.style.width = '100%';
        container.style.height = '500px';
    };

    const renderMap = function (c) {
        if (!Google) {
            throw Error('Please initialize GoogleMaps with callback function');
        }

        if (c) {
            center = c;
        }

        map = new Google.maps.Map(container, {
            zoom: 5,
            center: center,
        });
    };

    const renderMarkerTooltip = function (content) {
        let wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'poi-info-window gm-style';

        let titleDiv = document.createElement('div');
        titleDiv.className = 'title full-width';
        titleDiv.innerHTML = content.title;
        wrapperDiv.append(titleDiv);

        if (content.address) {
            let addressDiv = document.createElement('div');
            addressDiv.className = 'address';
            wrapperDiv.append(addressDiv);

            content.address.split('</br>').map((address) => {
                let addressLineDiv = document.createElement('div');
                addressLineDiv.className = 'address-line full-width';
                addressLineDiv.innerHTML = address;
                addressDiv.append(addressLineDiv);
            });
        }

        return wrapperDiv.outerHTML;
    };

    const renderMarkers = function (m, t) {
        const infoWindow = new google.maps.InfoWindow({
            content: '',
            disableAutoPan: true,
        });

        mapMarkers = m.map((loc) => {
            const marker = new Google.maps.Marker({
                position: loc.position,
                title: loc.content.title,
                map,
            });

            marker.addListener('click', () => {
                infoWindow.close();
                infoWindow.setContent(renderMarkerTooltip(loc.content));
                infoWindow.open(marker.getMap(), marker);
            });
            return marker;
        });
        if (t === markerType.CLUSTERED) {
            new MarkerClusterer(map, mapMarkers, {
                imagePath:
                    'https://cdn.jsdelivr.net/gh/googlemaps/v3-utility-library@07f15d84/markerclustererplus/images/m',
            });
        }
    };

    let p = {
        map_marker_type: undefined,
        container_id: undefined,
        center: undefined,
        markers: [],
    };

    let markerType = {
        INDIVIDUAL: 'INDIVIDUAL',
        CLUSTERED: 'CLUSTERED',
    };

    return {
        init: function (g, p) {
            Google = g;
            renderContainer(p.container_id);
            renderMap(p.center);
            renderMarkers(p.markers, p.map_marker_type);
        },
        markerType: markerType,
    };
})();

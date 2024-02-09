
package com.elderly.eventmt.mapper;

import com.elderly.eventmt.dto.Bookingdto;
import com.elderly.eventmt.entity.Bookingentity;

public class Bookingmapper {

    public static Bookingdto maptoServicedto(Bookingentity seriviceentity) {
        // Implement the mapping logic
        return new Bookingdto(
            seriviceentity.getId(),
            seriviceentity.getName(),
            seriviceentity.getAddress(),
            seriviceentity.getEventname(),
            seriviceentity.getEmail(),
            seriviceentity.getDate(),
            seriviceentity.getTiming(),
            seriviceentity.getPeople()
        );
    }

    public static Bookingentity maptoServiceentity(Bookingdto servicedto) {
        // Implement the mapping logic
        return new Bookingentity(
                servicedto.getId(),
                servicedto.getName(),
                servicedto.getAddress(),
                servicedto.getEventname(),
                servicedto.getEmail(),
                servicedto.getDate(),
                servicedto.getTiming(),
                servicedto.getPeople()
        );
    }
}
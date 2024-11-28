package com.nextage.Nextage_BackEnd;

import com.nextage.Nextage_BackEnd.Model.Enums.GameCategory;
import com.nextage.Nextage_BackEnd.Model.Enums.GameStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class GameDTO {
    private Long igdbId;
    private String name;
    private String slug;
    private String summary;
    private String storyline;
    private LocalDate firstReleaseDate;
    private Double totalRating;
    private Integer totalRatingCount;
    private GameCategory category;
    private GameStatus status;
    private String coverUrl;
    private String website;
    private Set<Long> genreIds;
    private Set<Long> platformIds;
}

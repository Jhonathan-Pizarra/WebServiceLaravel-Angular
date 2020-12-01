<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableVehiculos extends Migration
{
    
    public function up()
    {
        Schema::create('vehiculos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->float('cilindraje');
            $table->string('color');
            $table->string('potencia');
            $table->float('peso');
            $table->unsignedInteger('fabricante_id');
            $table->timestamps();
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('table_vehiculos');
    }
}

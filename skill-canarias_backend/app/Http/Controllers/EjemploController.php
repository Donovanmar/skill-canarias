<?php

namespace App\Http\Controllers;

use App\Models\Ejemplo;
use Illuminate\Http\Request;

class EjemploController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ejemplos = Ejemplo::all();

        return response()->json($ejemplos);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $ejemplo = new Ejemplo;
        $ejemplo->name = $request->name;
        $ejemplo->image = $request->image;
        $ejemplo->description = $request->description;
        $ejemplo->price = $request->price;
        $ejemplo->max_num_users = $request->max_num_users;
        $ejemplo->save();
        $data = [
            'message' => 'Ejemplo creado con éxito.',
            'ejemplo' => $ejemplo
        ];
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Ejemplo $ejemplo)
    {
        return response()->json($ejemplo);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ejemplo $ejemplo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ejemplo $ejemplo)
    {
        $ejemplo->name = $request->name;
        $ejemplo->image = $request->image;
        $ejemplo->description = $request->description;
        $ejemplo->price = $request->price;
        $ejemplo->max_num_users = $request->max_num_users;
        $ejemplo->save();
        $data = [
            'message' => 'Ejemplo actualizado con éxito.',
            'ejemplo' => $ejemplo
        ];
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ejemplo $ejemplo)
    {
        $ejemplo->delete();
        $data = [
            'message' => 'Ejemplo se ha eliminado correctamente.',
            'ejemplo' => $ejemplo
        ];
        return response()->json($data);
    }
}

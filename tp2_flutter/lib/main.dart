import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'counter_bloc.dart';

void main() => runApp(const CompteurApp());

class CompteurApp extends StatelessWidget {
  const CompteurApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: BlocProvider(
        create: (_) => CounterBloc(),
        child: const CompteurPage(),
      ),
    );
  }
}

class CompteurPage extends StatelessWidget {
  const CompteurPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('BLoC avec événements'),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: BlocBuilder<CounterBloc, int>(
          builder: (context, compteur) {
            return Text(
              '$compteur',
              style: const TextStyle(fontSize: 72, fontWeight: FontWeight.bold),
            );
          },
        ),
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          // Bouton +5
          FloatingActionButton(
            heroTag: 'plus5',
            onPressed: () => context.read<CounterBloc>().add(AddFivePressed()),
            backgroundColor: Colors.purple,
            child: const Text('+5', style: TextStyle(fontSize: 16)),
          ),
          const SizedBox(height: 12),
          // Bouton Reset
          FloatingActionButton(
            heroTag: 'reset',
            onPressed: () => context.read<CounterBloc>().add(ResetPressed()),
            backgroundColor: Colors.orange,
            child: const Icon(Icons.restart_alt),
          ),
          const SizedBox(height: 12),
          // Bouton -
          FloatingActionButton(
            heroTag: 'minus',
            onPressed: () =>
                context.read<CounterBloc>().add(DecrementPressed()),
            backgroundColor: Colors.red,
            child: const Icon(Icons.remove),
          ),
          const SizedBox(height: 12),
          // Bouton +
          FloatingActionButton(
            heroTag: 'plus',
            onPressed: () =>
                context.read<CounterBloc>().add(IncrementPressed()),
            backgroundColor: Colors.green,
            child: const Icon(Icons.add),
          ),
        ],
      ),
    );
  }
}
